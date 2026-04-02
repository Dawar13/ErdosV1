import { useEffect, useRef, useState } from 'react'

export function useInViewVideo(lazySrc?: string) {
  const ref = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(!lazySrc)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (lazySrc && !loaded) {
            el.src = lazySrc
            setLoaded(true)
          }
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [lazySrc, loaded])

  return { ref, loaded }
}
