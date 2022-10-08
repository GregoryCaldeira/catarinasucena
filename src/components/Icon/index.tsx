import { FC, memo } from "react";

import { IconContent } from "./IconContent";
import { useIconSize } from "./hooks";
import { IconProps } from "./types";

export const Icon: FC<IconProps> = memo(({ size, name, color, ...rest }) => {
  const { iconSize, strokeWidth } = useIconSize(size);
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <IconContent color={color} name={name} strokeWidth={strokeWidth} />
    </svg>
  );
});
