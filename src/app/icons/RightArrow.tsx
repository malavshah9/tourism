import * as React from "react";
const RightArrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#E6F2F2" />
    <path
      fill="teal"
      d="m20 28-1.425-1.4 5.6-5.6H12v-2h12.175l-5.6-5.6L20 12l8 8-8 8Z"
    />
  </svg>
);
export { RightArrow };
