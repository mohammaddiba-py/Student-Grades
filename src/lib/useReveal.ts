import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll using IntersectionObserver. Returns a ref to attach
 * to an element and a boolean for whether it has entered the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; once?: boolean; rootMargin?: string } = {}
) {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -10% 0px' } = options
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, visible }
}
