import * as React from "react";
import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#001A1A"
      d="M0 20v-3.333h30V20H0Zm0-8.333V8.333h30v3.334H0Zm0-8.334V0h30v3.333H0Z"
    />
  </svg>
);
export { Menu };
