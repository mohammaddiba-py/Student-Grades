import { useEffect, useState, useCallback } from "react";

/** Fullscreen image viewer with keyboard navigation. */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const total = images.length;

  const step = useCallback(
    (dir) => onNavigate((index + dir + total) % total),
    [index, total, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
      className="animate-lightbox-in fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <img
        key={index}
        src={images[index]}
        alt={`Property image ${index + 1} of ${total}`}
        className="animate-gallery-fade max-h-[86vh] max-w-[92vw] rounded-xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          step(-1);
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <p className="absolute bottom-5 text-sm font-medium text-white/70">
        {index + 1} / {total}
      </p>
    </div>
  );
}
