import { forwardRef, useRef, useEffect } from "react"
import { gsap } from "gsap"

export const ChevronDownIcon = forwardRef(
  ({ width = 24, height = 24, color = "currentColor" }, ref) => {
    const iconRef = useRef(null)

    useEffect(() => {
      if (!iconRef.current) return

      gsap.to(iconRef.current, {
        y: 8,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })
    }, [])

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
        className="lucide lucide-chevron-down h-8 w-8"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  },
)

ChevronDownIcon.displayName = "ChevronDownIcon"
