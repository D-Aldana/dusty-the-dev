import { forwardRef } from 'react'

export const HomePlateIcon = forwardRef(
  ({ width = 150, height = 150 }, ref) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 100.9 89.757706"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="linearGradient16">
            <stop
              style={{ stopColor: '#f0ddc7', stopOpacity: 1 }}
              offset="0.00165563"
            />
            <stop
              style={{ stopColor: '#fefae0', stopOpacity: 0.498 }}
              offset="1"
            />
          </linearGradient>

          <linearGradient id="swatch15">
            <stop
              style={{ stopColor: 'currentColor', stopOpacity: 1 }}
              offset="0"
            />
          </linearGradient>

          <linearGradient
            href="#swatch15"
            id="linearGradient15"
            x1="53.799999"
            y1="159.63693"
            x2="156.2"
            y2="159.63693"
            gradientUnits="userSpaceOnUse"
          />

          <linearGradient
            href="#linearGradient16"
            id="linearGradient18"
            gradientUnits="userSpaceOnUse"
            x1="102.32563"
            y1="210.65355"
            x2="107.67437"
            y2="108.59356"
          />
        </defs>

        <g transform="translate(-54.55,-114.55001)">
          <path
            className="home-plate-path"
            style={{
              fill: 'url(#linearGradient18)',
              fillRule: 'evenodd',
              stroke: 'url(#linearGradient15)',
              strokeWidth: 3,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
              paintOrder: 'stroke fill markers',
            }}
            d="M 55.000001,115 H 155 v 50 L 105,203.95271 55.000001,165 Z"
          />
        </g>
      </svg>
    )
  },
)

HomePlateIcon.displayName = 'HomePlateIcon'
