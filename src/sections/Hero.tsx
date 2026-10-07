import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from '../components/icons'

/**
 * Scroll-driven hero video ("camera on rails" experience).
 *
 * VIDEO ENCODING NOTES (see requirement: fast random-access seeking)
 * -----------------------------------------------------------------
 * For buttery scroll-scrubbing the source file should be encoded with:
 *  - H.264 MP4 with the moov atom at the front ("faststart"/progressive web-optimized)
 *  - Frequent keyframes (short GOP, e.g. keyframe every ~1s or 30 frames) so
 *    seeking lands on decodable frames quickly instead of rebuilding from far away
 *  - Moderate bitrate (~6-10 Mbps for 1080p) — high bitrates stall on slow networks
 *  - Optional WebM (VP9) <source> for browsers where it decodes faster
 * The current file is served from the platform CDN with HTTP Range support,
 * which is required for seeking to work at all.
 */

const VIDEO_URL =
  'https://media.base44.com/videos/public/6ac2a75d941f935bcd150c37/71dd5a426_.mp4'
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80'

// Total scroll distance for the hero experience (vh units).
const HERO_SCROLL_VH = 300

const SMOOTH_FAR = 0.35 // catch-up factor when the target is far away
const SMOOTH_NEAR = 0.14 // cinematic easing when close to the target
const SEEK_THRESHOLD = 0.04 // s — don't write currentTime below this delta
const END_GUARD = 0.05 // s — seek to duration - guard so the last frame decodes

export default function Hero() {
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [videoFailed, setVideoFailed] = useState(false)
  const [ready, setReady] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)

  const staticHero = reducedMotion || videoFailed

  useEffect(() => {
    if (staticHero) return
    const section = sectionRef.current
    if (!section) return

    // All animation state lives in refs — zero React re-renders per frame.
    const state = {
      target: 0, // desired video time in seconds
      current: 0, // smoothed video time
      duration: 0,
      raf: 0,
      running: false,
      idleFrames: 0,
      lastProgress: -1,
    }

    const clampTime = (t: number) =>
      state.duration > 0 ? Math.min(t, Math.max(0, state.duration - END_GUARD)) : t

    const measureProgress = () => {
      const rect = section.getBoundingClientRect()
      const span = section.offsetHeight - window.innerHeight
      return span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0
    }

    const tick = () => {
      const video = videoRef.current
      const text = textRef.current
      const cue = cueRef.current
      if (!video || !section) {
        state.running = false
        return
      }

      // Smooth interpolation between target and current time.
      const diff = state.target - state.current
      const factor = Math.abs(diff) > 2 ? SMOOTH_FAR : SMOOTH_NEAR
      state.current += diff * factor
      if (Math.abs(state.target - state.current) < 0.001) {
        state.current = state.target
      }

      // Write currentTime at most once per frame, and only when meaningful.
      if (
        state.duration > 0 &&
        Math.abs(video.currentTime - state.current) > SEEK_THRESHOLD
      ) {
        video.currentTime = state.current
      }

      // Hero text/cue fade driven directly on the DOM (no re-render).
      const p = measureProgress()
      if (text) {
        const fade = Math.min(1, Math.max(0, 1 - p * 1.8))
        text.style.opacity = String(fade)
        text.style.transform = `translateY(${-p * 60}px)`
        text.style.pointerEvents = p < 0.3 ? 'auto' : 'none'
      }
      if (cue) {
        cue.style.opacity = String(Math.min(1, Math.max(0, 1 - p * 6)))
      }

      // Stop the rAF loop when fully settled to keep the page idle-cheap.
      if (Math.abs(state.target - state.current) < 0.002) {
        state.idleFrames++
        if (state.idleFrames > 30) {
          state.running = false
          state.raf = 0
          return
        }
      } else {
        state.idleFrames = 0
      }

      state.raf = requestAnimationFrame(tick)
    }

    const wake = () => {
      if (state.running) return
      state.running = true
      state.idleFrames = 0
      state.raf = requestAnimationFrame(tick)
    }

    // The scroll handler ONLY records the target; seeking happens in rAF.
    const onScroll = () => {
      const p = measureProgress()
      if (p === state.lastProgress) return
      state.lastProgress = p
      state.target = clampTime(p * state.duration)
      wake()
    }

    const onLoadedMetadata = () => {
      state.duration = videoRef.current?.duration ?? 0
      // Re-sync the target now that duration is known.
      onScroll()
    }
    const onLoadedData = () => setReady(true)

    const videoEl = videoRef.current
    videoEl?.addEventListener('loadedmetadata', onLoadedMetadata)
    videoEl?.addEventListener('loadeddata', onLoadedData)
    // If the video already loaded (cached / remount), read state directly —
    // the loadedmetadata event will not fire again.
    if (videoEl && videoEl.readyState >= 1) {
      onLoadedMetadata()
      if (videoEl.readyState >= 2) onLoadedData()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()

    return () => {
      cancelAnimationFrame(state.raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      videoRef.current?.removeEventListener('loadedmetadata', onLoadedMetadata)
      videoRef.current?.removeEventListener('loadeddata', onLoadedData)
    }
  }, [staticHero])

  // ---------------------------------------------------------------
  // Static fallback hero (reduced motion or video failure)
  // ---------------------------------------------------------------
  if (staticHero) {
    return (
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FALLBACK_IMG}
            alt="Modern luxury villa at dusk with infinity pool and warm interior lighting"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/35 to-navy/70" />
          <div className="absolute inset-0 bg-navy/20" />
        </div>
        <HeroText animate={false} />
      </section>
    )
  }

  // ---------------------------------------------------------------
  // Scroll-scrubbed hero
  // ---------------------------------------------------------------
  return (
    <section ref={sectionRef} className="relative" style={{ height: `${HERO_SCROLL_VH}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Poster (first frame stand-in) — also the failure fallback layer */}
        <div className="absolute inset-0">
          <img
            src={FALLBACK_IMG}
            alt="Modern luxury villa at dusk with infinity pool and warm interior lighting"
            className="h-full w-full object-cover"
          />
          {/* Video — never plays; timeline is scrubbed by scroll position.
              muted + playsInline are required for scrubbed video on mobile. */}
          <video
            ref={videoRef}
            preload="auto"
            muted
            playsInline
            disableRemotePlayback
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ opacity: ready ? 1 : 0 }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
            {/* Add a VP9/WebM source here for wider optimized coverage. */}
          </video>
          {/* Subtle overlay only — the video must stay visually dominant */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy/60" />
        </div>

        {/* Text (opacity/position driven imperatively by the scroll loop) */}
        <div ref={textRef} className="container-x relative z-10 pt-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-label text-gold">
            Premium Real Estate &amp; Investments
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Premium properties in prime locations. Find your dream home or the
            perfect investment with confidence.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/properties"
              className="btn bg-gold px-7 py-3.5 text-navy rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30"
            >
              Browse Properties
              <ArrowRight width={18} height={18} />
            </Link>
            <Link to="/contact" className="btn-outline px-7 py-3.5">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Minimal premium loading state */}
        {!ready && !videoFailed && (
          <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 animate-fade-in">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              <span className="text-[11px] font-medium uppercase tracking-label text-white/80">
                Preparing experience
              </span>
            </div>
          </div>
        )}

        {/* Scroll cue */}
        <div
          ref={cueRef}
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[11px] uppercase tracking-label">Scroll</span>
            <ChevronDown width={18} height={18} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroText({ animate }: { animate: boolean }) {
  return (
    <div className="container-x relative z-10 pt-24 text-center">
      <p
        className={`text-xs font-semibold uppercase tracking-label text-gold ${
          animate ? 'animate-fade-up [animation-delay:120ms]' : ''
        }`}
      >
        Premium Real Estate &amp; Investments
      </p>
      <h1
        className={`mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl ${
          animate ? 'animate-fade-up [animation-delay:220ms]' : ''
        }`}
      >
        Discover Exceptional
        <br />
        Homes &amp; Investments
      </h1>
      <p
        className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg ${
          animate ? 'animate-fade-up [animation-delay:360ms]' : ''
        }`}
      >
        Premium properties in prime locations. Find your dream home or the
        perfect investment with confidence.
      </p>
      <div
        className={`mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row ${
          animate ? 'animate-fade-up [animation-delay:500ms]' : ''
        }`}
      >
        <Link
          to="/properties"
          className="btn bg-gold px-7 py-3.5 text-navy rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30"
        >
          Browse Properties
          <ArrowRight width={18} height={18} />
        </Link>
        <Link to="/contact" className="btn-outline px-7 py-3.5">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
