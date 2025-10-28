import { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

export const LinkedinIcon = forwardRef(
  ({ width = 150, height = 150, delay = 0, duration = 2 }, ref) => {
    const iconRef = useRef(null)
    const circleRef = useRef(null)
    const tlRef = useRef(null)

    useEffect(() => {
      if (!iconRef.current || !circleRef.current) return

      const paths = iconRef.current.querySelectorAll("path, rect, circle")
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

      const circle = circleRef.current
      tlRef.current = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
      })

      // Animate vertical bounce
      tlRef.current.to(circle, {
        y: -1.5, // move upward (negative Y = up)
        duration: 0.3,
        ease: "power1.inOut", // gives a smooth bounce feel
      })

      const icon = iconRef.current

      const handleEnter = () => tlRef.current.play()
      const handleLeave = () => tlRef.current.pause(0)

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
        className="lucide lucide-linkedin h-6 w-6"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle ref={circleRef} cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
)

LinkedinIcon.displayName = "LinkedinIcon"
