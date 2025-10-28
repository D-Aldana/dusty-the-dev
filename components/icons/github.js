import { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

export const GithubIcon = forwardRef(
  ({ width = 24, height = 24, delay = 0, duration = 2 }, ref) => {
    const tailRef = useRef(null)
    const iconRef = useRef(null)

    useEffect(() => {
      if (!tailRef.current || !iconRef.current) return

      const paths = iconRef.current.querySelectorAll("path")
      gsap.fromTo(
        paths,
        { drawSVG: "0% 0%" },
        {
          drawSVG: "0% 100%",
          duration: duration,
          ease: "power2.inOut",
          stagger: 0.1,
          delay: delay,
        },
      )

      const tail = tailRef.current
      const tl = gsap.timeline({ paused: true, yoyo: true, repeat: -1 })
      tl.to(tail, {
        rotation: 15,
        transformOrigin: "left center",
        duration: 0.7,
      })
        .to(tail, { rotation: -15, duration: 0.4 })
        .to(tail, { rotation: 0, duration: 0.3 })

      const icon = iconRef.current

      const handleEnter = () => tl.play()
      const handleLeave = () => tl.pause(0)

      icon.addEventListener("mouseenter", handleEnter)
      icon.addEventListener("mouseleave", handleLeave)

      return () => {
        icon.removeEventListener("mouseenter", handleEnter)
        icon.removeEventListener("mouseleave", handleLeave)
      }
    }, [delay, duration])

    return (
      <svg
        ref={iconRef}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github h-6 w-6"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path ref={tailRef} d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    )
  },
)

GithubIcon.displayName = "GithubIcon"
