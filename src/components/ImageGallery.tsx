import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExpandIcon, CloseIcon } from './icons'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive((i) => (i + dir + images.length) % images.length)
    },
    [images.length]
  )

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, go])

  return (
    <>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-[16/10] w-full bg-navy/5">
          <img
            src={images[active]}
            alt={`${alt} — image ${active + 1}`}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label="View fullscreen"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
        >
          <ExpandIcon width={18} height={18} />
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <ChevronLeft width={22} height={22} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <ChevronRight width={22} height={22} />
            </button>
          </>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-navy/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {active + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                i === active
                  ? 'ring-2 ring-gold ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — fullscreen gallery`}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <CloseIcon width={22} height={22} />
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft width={26} height={26} />
          </button>
          <img
            src={images[active]}
            alt={`${alt} — fullscreen image ${active + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight width={26} height={26} />
          </button>
        </div>
      )}
    </>
  )
}
