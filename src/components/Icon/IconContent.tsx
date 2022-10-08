import { FC, createElement, memo } from "react";

import * as IconPaths from "./Icons";

import { IconContentProps, IconNames } from "./types";

export const IconContent: FC<IconContentProps> = memo(
  ({ name, color, strokeWidth }) =>
    createElement(IconPaths[name as IconNames], {
      color,
      strokeWidth
    })
);
