import { useRef, forwardRef, useEffect, useState } from "react"
import { gsap } from "gsap"

export const MountainIcon = forwardRef(
  (
    { width = 150, height = 150, color = "currentColor", animate = false },
    ref,
  ) => {
    const svgRef = useRef(null)
    const snowRef = useRef([])
    const [client, setClient] = useState(false)

    useEffect(() => {
      setClient(true)
    }, [])

    useEffect(() => {
      if (animate && client) {
        snowRef.current.forEach((flake) => {
          gsap.fromTo(
            flake,
            { y: -10, opacity: 0 },
            {
              y: height + 10,
              opacity: 1,
              duration: 3 + Math.random() * 2,
              repeat: -1,
              delay: Math.random() * 2,
              ease: "linear",
            },
          )
        })
      }
    }, [animate, client, height])

    const snowflakes = client
      ? Array.from({ length: 10 }, (_, i) => (
          <circle
            key={i}
            ref={(el) => (snowRef.current[i] = el)}
            cx={Math.random() * width}
            cy={0}
            r={1}
            fill="#fff"
          />
        ))
      : null

    return (
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        {snowflakes}
      </svg>
    )
  },
)

MountainIcon.displayName = "MountainIcon"
export default MountainIcon
