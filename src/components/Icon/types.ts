import { SVGAttributes } from "react";

export type IconNames = "arrowDown" | "chevronDown" | "menu";

export type IconSizes = "s" | "m" | "l" | "xl";

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  size: IconSizes;
  color: string;
}

export interface IconContentProps {
  name: IconNames;
  color: string;
  strokeWidth: string;
}

export interface PathProps {
  color: string;
  strokeWidth: string;
}
