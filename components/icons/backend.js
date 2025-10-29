import { forwardRef, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

export const BackendIcon = forwardRef((props, ref) => {
  const {
    color = "currentColor",
    width = 24,
    height = 24,
    duration = 2,
    delay = 0,
  } = props

  const iconRef = useRef(null)

  useEffect(() => {
    const element = iconRef.current
    if (!element) return
    const paths = element.querySelectorAll("path, ellipse")

    gsap.fromTo(
      paths,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: duration,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [duration, delay])

  return (
    <svg
      ref={iconRef}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  )
})

BackendIcon.displayName = "BackendIcon"
