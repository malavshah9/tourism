import React from "react";
import { SVGProps } from "react";
const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#001A1A"
      d="M2.667 23.667.333 21.333 9.667 12 .333 2.667 2.667.333 12 9.667 21.333.333l2.334 2.334L14.333 12l9.334 9.333-2.334 2.334L12 14.333l-9.333 9.334Z"
    />
  </svg>
);
export { Cross };
