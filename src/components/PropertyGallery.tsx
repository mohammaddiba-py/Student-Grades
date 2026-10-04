import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'

interface PropertyGalleryProps {
  images: string[]
  alt: string
}

export default function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const goPrev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl aspect-[16/10] group">
          <img
            src={images[activeIndex]}
            alt={`${alt} — image ${activeIndex + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Nav arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus-gold"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus-gold"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
          {/* Expand button */}
          <button
            onClick={() => setFullscreen(true)}
            aria-label="View fullscreen"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus-gold"
          >
            <Expand className="w-5 h-5" strokeWidth={1.5} />
          </button>
          {/* Counter */}
          <span className="absolute bottom-4 right-4 rounded-full bg-navy/60 backdrop-blur-sm px-3 py-1 text-xs text-white">
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`shrink-0 w-24 h-20 lg:w-28 lg:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                i === activeIndex
                  ? 'ring-2 ring-champagne ring-offset-2 ring-offset-ivory'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${alt} thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-all focus-gold"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Previous image"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-all focus-gold"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <img
            src={images[activeIndex]}
            alt={`${alt} — fullscreen`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Next image"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-all focus-gold"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  )
}
