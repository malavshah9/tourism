import * as React from "react";
import { SVGProps } from "react";
const RightArrowWithoutBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="teal"
      d="m8 16-1.425-1.4 5.6-5.6H0V7h12.175l-5.6-5.6L8 0l8 8-8 8Z"
    />
  </svg>
);
export { RightArrowWithoutBg };
