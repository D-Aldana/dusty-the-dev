import { forwardRef, useRef, useEffect } from "react"
import { gsap } from "gsap"

export const BoxingGlovesIcon = forwardRef(
  (
    { width = 150, height = 150, color = "currentColor", animate = false },
    ref,
  ) => {
    const leftGloveRef = useRef(null)
    const rightGloveRef = useRef(null)

    useEffect(() => {
      if (animate) {
        const tl = gsap.timeline({ repeat: -1 })

        tl.to(leftGloveRef.current, {
          y: -30,
          duration: 0.3,
          ease: "power3.inOut",
        })
          .to(leftGloveRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power3.inOut",
          })
          .to(
            rightGloveRef.current,
            {
              y: -30,
              duration: 0.3,
              ease: "power3.inOut",
            },
            "-=0.15",
          )
          .to(rightGloveRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power3.inOut",
          })
      } else {
        gsap.killTweensOf([leftGloveRef.current, rightGloveRef.current])
        gsap.set([leftGloveRef.current, rightGloveRef.current], { y: 0 })
      }
    }, [animate])

    return (
      <svg
        ref={ref}
        fill={color}
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 496"
      >
        <g>
          {/* Left glove */}
          <g ref={leftGloveRef}>
            <path
              d="M232,239.952c0,13.568-4.92,26.664-13.856,36.872L180.368,320H160v16h16v104H40V336h104v-16H37.272l-18.04-42.104
              c-2.144-5-3.232-10.304-3.232-15.744V112c0-30.88,25.12-56,56-56h56c30.88,0,56,25.12,56,56v28l-22.408,16.8
              C155.584,161.312,152,168.488,152,176v8c0,13.232,10.768,24,24,24s24-10.768,24-24v-16c0-8.824,7.176-16,16-16
              c8.824,0,16,7.176,16,16V239.952z"
            />
          </g>

          {/* Right glove */}
          <g ref={rightGloveRef}>
            <path
              d="M480,262.152c0,5.448-1.088,10.752-3.232,15.76L458.728,320H440v16h16v104H320V336h104v-16H315.632l-37.776-43.168
              C268.92,266.616,264,253.52,264,239.952V168c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16v16c0,13.232,10.768,24,24,24
              s24-10.768,24-24v-8c0-7.512-3.584-14.688-9.6-19.2L312,140v-28c0-30.88,25.12-56,56-56h56c30.88,0,56,25.12,56,56V262.152z"
            />
          </g>
        </g>
      </svg>
    )
  },
)

BoxingGlovesIcon.displayName = "BoxingGlovesIcon"
export default BoxingGlovesIcon
