import { forwardRef } from "react"

export const EnvelopeIcon = forwardRef(
  ({ width = 150, height = 150, strokeColor }, ref) => {
    return (
      <svg
        class="envelope"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 250"
        width={width}
        height={height}
      >
        <polygon points="0 0 200 125 400 0 400 250 0 250 0 0" fill="#333" />
        <line
          x1="400"
          y1="250"
          fill="none"
          stroke={strokeColor}
          strokeWidth="20"
        />
        <line
          x1="400"
          y2="250"
          fill="none"
          stroke={strokeColor}
          strokeWidth="20"
        />
        <path
          class="top"
          d="M410-10,200,170-10-10Z"
          fill="currentColor"
          stroke={strokeColor}
          strokeWidth="20"
        />
      </svg>
    )
  },
)

EnvelopeIcon.displayName = "EnvelopeIcon"
