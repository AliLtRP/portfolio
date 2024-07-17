import * as React from "react"
const LogoNeon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={105}
    height={119}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M90.508 17.89a4.073 4.073 0 0 1-4.073 4.073H18.436a4.073 4.073 0 0 1 0-8.145h68a4.072 4.072 0 0 1 4.072 4.073ZM90.508 99.746a4.072 4.072 0 0 1-4.073 4.072H18.436a4.072 4.072 0 1 1 0-8.145h68a4.073 4.073 0 0 1 4.072 4.073Z"
        clipRule="evenodd"
      />
      <path
        stroke="#fff"
        strokeWidth={8}
        d="m61.002 17.89-31.41 39.976 31.41 42.832"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={104.144}
        height={118}
        x={0.364}
        y={0.818}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={7} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_266" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16_266"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default LogoNeon
