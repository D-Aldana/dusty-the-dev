import { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

gsap.registerPlugin(MorphSVGPlugin)

export const EnvelopeIcon = forwardRef(
  (
    { width = 150, height = 150, strokeColor = "currentColor", open = false },
    ref,
  ) => {
    const flapRef = useRef(null)
    const topLineRef = useRef(null)
    const paperRef = useRef(null)
    const tlRef = useRef(null)

    const closedFlap = "M2 7L12 14L22 7"
    const openFlap = "M2 7L12 2L22 7"

    useEffect(() => {
      tlRef.current = gsap.timeline({ paused: true })

      tlRef.current.to(
        flapRef.current,
        {
          duration: 0.5,
          morphSVG: openFlap,
          ease: "power2.inOut",
        },
        0,
      )

      tlRef.current.to(
        topLineRef.current,
        {
          duration: 0.4,
          opacity: 0,
          ease: "power1.out",
        },
        0.1,
      )

      tlRef.current.to(
        paperRef.current,
        {
          duration: 0.2,
          y: 1,
          opacity: 0.8,
          ease: "power2.inOut",
        },
        0,
      )
    }, [])

    useEffect(() => {
      if (!tlRef.current) return
      if (open) {
        tlRef.current.play()
      } else {
        tlRef.current.reverse()
      }
    }, [open])

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
      >
        {/* Flap */}
        <path ref={flapRef} d={closedFlap} />

        {/* Top line */}
        <path ref={topLineRef} d="M2 7H22" />

        {/* Envelope body */}
        <path d="M2 7L2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2L22 7" />

        {/* Paper */}
        <path
          ref={paperRef}
          d={closedFlap}
          fill={strokeColor}
          stroke={strokeColor}
          opacity={0.1}
        />
      </svg>
    )
  },
)

EnvelopeIcon.displayName = "EnvelopeIcon"
