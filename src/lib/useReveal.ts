import { useEffect, useRef, useState } from 'react'

/**
 * Fades an element in the first time it scrolls into view.
 * Pure CSS handles the animation, so the effect is smooth and lightweight.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    // A `display: none` element is never reported as intersecting. Several
    // blocks are phone-only (or desktop-only), so a breakpoint change - a
    // rotated tablet, a resized window - would otherwise reveal a block at
    // opacity 0 with no observer left to reveal it.
    const sync = () => {
      if (node.getClientRects().length === 0) return
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) setVisible(true)
    }

    observer.observe(node)
    window.addEventListener('resize', sync)
    sync()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])

  return { ref, visible }
}
