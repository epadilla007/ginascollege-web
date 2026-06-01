'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    async function init() {
      // Import GSAP and ScrollTrigger so we can connect Lenis to them.
      // Without this connection, Lenis intercepts scroll events and
      // ScrollTrigger never fires correctly, leaving animated sections invisible.
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      })

      lenisRef.current = lenis

      // Sync Lenis scroll position to ScrollTrigger on every Lenis scroll event
      lenis.on('scroll', ScrollTrigger.update)

      // Drive Lenis via GSAP's ticker instead of a raw RAF loop.
      // This keeps everything on the same frame and prevents drift.
      const ticker = (time: number) => { lenis.raf(time * 1000) }
      gsap.ticker.add(ticker)
      gsap.ticker.lagSmoothing(0)

      return () => {
        lenis.destroy()
        gsap.ticker.remove(ticker)
      }
    }

    let cleanup: (() => void) | undefined

    init().then((fn) => {
      cleanup = fn
    })

    return () => {
      cleanup?.()
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
