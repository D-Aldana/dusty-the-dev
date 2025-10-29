import { forwardRef, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

export const FrontendIcon = forwardRef((props, ref) => {
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
    const paths = element.querySelectorAll("path")

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
      className="lucide lucide-code-xml h-10 w-10"
      aria-hidden="true"
    >
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="m14.5 4-5 16"></path>
    </svg>
  )
})

FrontendIcon.displayName = "FrontendIcon"
