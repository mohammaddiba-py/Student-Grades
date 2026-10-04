import { useEffect, useRef, useState } from "react";

/**
 * Scroll-snap carousel with native touch scrolling, mouse drag on desktop,
 * arrow buttons and arrow-key support.
 */
export default function Carousel({ children, ariaLabel, className = "" }) {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, moved: false, startX: 0, startScroll: 0 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > *");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") scrollByCard(1);
    if (e.key === "ArrowLeft") scrollByCard(-1);
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (e.pointerType === "touch") return;
    drag.current = {
      down: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true;
    trackRef.current.scrollLeft = d.startScroll - dx;
  };
  const endDrag = (e) => {
    if (!drag.current.down) return;
    drag.current.down = false;
    const el = trackRef.current;
    el.releasePointerCapture?.(e.pointerId);
    // snap cleanly after a drag
    const card = el.querySelector(":scope > *");
    if (card && drag.current.moved) {
      const step = card.getBoundingClientRect().width + 20;
      el.scrollTo({ left: Math.round(el.scrollLeft / step) * step, behavior: "smooth" });
    }
  };
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const arrow =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 bg-white text-navy-900 shadow-[0_10px_28px_-12px_rgba(11,31,58,0.4)] transition-all duration-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        aria-label="Previous properties"
        className={`${arrow} absolute -left-3 top-1/2 z-10 -translate-y-1/2 md:-left-5`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        aria-label="Next properties"
        className={`${arrow} absolute -right-3 top-1/2 z-10 -translate-y-1/2 md:-right-5`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className="no-scrollbar flex snap-x snap-mandatory cursor-grab gap-5 overflow-x-auto scroll-smooth pb-2 active:cursor-grabbing"
      >
        {children}
      </div>
    </div>
  );
}
