import { forwardRef } from "react"

export const InputIcon = forwardRef(
  ({ color = "currentColor", width = 24, height = 24 }, ref) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 20"
        fill="none"
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4071 0C20.5714 0 18.8187 0.545523 17.3501 1.43496V1.39938L4.86751 9.60593V0.225324H0V18.6901L12.8497 10.2226C13.1813 15.2035 17.3146 19.2 22.4071 19.2C27.6773 19.2 32 14.907 32 9.59407C31.9645 4.28116 27.6773 0 22.4071 0ZM22.4071 14.2903C19.8135 14.2903 17.6817 12.1675 17.6817 9.55849C17.6817 6.96133 19.8016 4.82668 22.4071 4.82668C25.0007 4.82668 27.1325 6.94947 27.1325 9.55849C27.1325 12.2031 25.0007 14.2903 22.4071 14.2903Z"
          fill={color}
        />
      </svg>
    )
  },
)

InputIcon.displayName = "InputIcon"
