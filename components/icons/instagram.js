import { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

export const InstagramIcon = forwardRef(({ width = 24, height = 24 }, ref) => {
  const iconRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    if (!iconRef.current) return

    const paths = iconRef.current.querySelectorAll("path")
    gsap.fromTo(
      paths,
      { drawSVG: "0% 0%" },
      {
        drawSVG: "0% 100%",
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.1,
      },
    )

    const icon = iconRef.current

    tlRef.current = gsap.timeline({ paused: true, yoyo: true, repeat: -1 })
    tlRef.current
      .to(icon, { rotation: 10, duration: 0.1, transformOrigin: "50% 50%" })
      .to(icon, { rotation: -10, duration: 0.2 })
      .to(icon, { rotation: 5, duration: 0.15 })
      .to(icon, { rotation: 0, duration: 0.1 })

    const handleEnter = () => tlRef.current.play()
    const handleLeave = () => tlRef.current.pause(0)

    icon.addEventListener("mouseenter", handleEnter)
    icon.addEventListener("mouseleave", handleLeave)

    return () => {
      icon.removeEventListener("mouseenter", handleEnter)
      icon.removeEventListener("mouseleave", handleLeave)
    }
  }, [])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={iconRef}
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
    </svg>
  )
})

InstagramIcon.displayName = "InstagramIcon"
