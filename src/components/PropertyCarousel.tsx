import { useCallback, useEffect, useRef, useState } from 'react'
import type { Property } from '../data/types'
import PropertyCard from './PropertyCard'
import { ChevronLeft, ChevronRight } from './icons'

interface PropertyCarouselProps {
  properties: Property[]
}

export default function PropertyCarousel({ properties }: PropertyCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  // drag-to-scroll state
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth - 2
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < max)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    const onScroll = () => updateArrows()
    el.addEventListener('scroll', onScroll, { passive: true })
    const ro = new ResizeObserver(() => updateArrows())
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', onScroll)
      ro.disconnect()
    }
  }, [updateArrows])

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  // Pointer drag
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current
    if (!el) return
    // only drag with primary button / touch
    if (e.pointerType === 'mouse' && e.button !== 0) return
    drag.current = {
      active: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    }
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return
    const el = trackRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = x - drag.current.startX
    if (Math.abs(walk) > 4) drag.current.moved = true
    el.scrollLeft = drag.current.scrollLeft - walk
  }

  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.active) return
    drag.current.active = false
    try {
      trackRef.current?.releasePointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
  }

  const preventClick = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar drag-cursor flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={preventClick}
      >
        {properties.map((p) => (
          <div
            key={p.id}
            data-card
            onClick={preventClick}
            className="w-[80vw] shrink-0 snap-start sm:w-[340px] lg:w-[380px]"
          >
            <PropertyCard property={p} className="h-full" />
          </div>
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        disabled={!canPrev}
        aria-label="Previous properties"
        className="absolute -left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white p-3 text-navy shadow-xl transition-all duration-300 enabled:hover:bg-navy enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-0 lg:flex"
      >
        <ChevronLeft width={22} height={22} />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        disabled={!canNext}
        aria-label="Next properties"
        className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white p-3 text-navy shadow-xl transition-all duration-300 enabled:hover:bg-navy enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-0 lg:flex"
      >
        <ChevronRight width={22} height={22} />
      </button>
    </div>
  )
}
