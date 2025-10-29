import { forwardRef, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

export const DesignIcon = forwardRef((props, ref) => {
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
    const paths = element.querySelectorAll("path, circle")

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
      className="lucide lucide-palette h-10 w-10"
      aria-hidden="true"
    >
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
      <circle cx="13.5" cy="6.5" r=".5" fill={color}></circle>
      <circle cx="17.5" cy="10.5" r=".5" fill={color}></circle>
      <circle cx="6.5" cy="12.5" r=".5" fill={color}></circle>
      <circle cx="8.5" cy="7.5" r=".5" fill={color}></circle>
    </svg>
  )
})

DesignIcon.displayName = "DesignIcon"
