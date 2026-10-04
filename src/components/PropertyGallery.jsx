import { useState } from "react";
import Lightbox from "./Lightbox.jsx";

/** Large hero image + thumbnail rail + fullscreen viewer. */
export default function PropertyGallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="zoom-frame group relative block w-full rounded-2xl"
        aria-label={`Open image viewer for ${name}`}
      >
        <img
          key={index}
          src={images[index]}
          alt={`${name} — photo ${index + 1}`}
          className="animate-gallery-fade aspect-[16/10] w-full rounded-2xl"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-navy-900">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v4.5H8.25m12 10.5V15h-4.5M3.75 15v4.5H8.25m12-10.5V4.5h-4.5" />
          </svg>
          View fullscreen
        </span>
      </button>

      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Photo thumbnails">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`zoom-frame w-24 shrink-0 rounded-lg transition-all duration-300 sm:w-28 ${
              i === index ? "ring-2 ring-gold ring-offset-2 ring-offset-white" : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg"
            />
          </button>
        ))}
      </div>

      {open && (
        <Lightbox images={images} index={index} onClose={() => setOpen(false)} onNavigate={setIndex} />
      )}
    </div>
  );
}
