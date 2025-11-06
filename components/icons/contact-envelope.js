import { forwardRef } from "react"

export const ContactEnvelope = forwardRef((props, ref) => {
  const { color = "currentColor", width = 24, height = 24 } = props
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-mail h-6 w-6 text-olive dark:text-bronze"
      aria-hidden="true"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    </svg>
  )
})

ContactEnvelope.displayName = "ContactEnvelope"
