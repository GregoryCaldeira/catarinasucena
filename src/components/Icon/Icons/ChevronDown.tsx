import { FC, memo } from "react";

import { PathProps } from "../types";

export const ChevronDown: FC<PathProps> = memo(({ color, strokeWidth }) => (
  <path
    d="M8 12L16 20L24 12"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
