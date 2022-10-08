import { FC, memo } from "react";

import { PathProps } from "../types";

export const ArrowDown: FC<PathProps> = memo(({ color, strokeWidth }) => (
  <>
    <path
      d="M11.5 4.79166V18.2083"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.2083 11.5L11.5 18.2083L4.79166 11.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
));
