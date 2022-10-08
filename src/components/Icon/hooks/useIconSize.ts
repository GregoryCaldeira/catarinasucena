import { IconSizes } from "../types";

export const useIconSize = (size: IconSizes) => {
  const iconSizes = {
    s: {
      iconSize: "16",
      strokeWidth: "2.3"
    },
    m: {
      iconSize: "20",
      strokeWidth: "2.2"
    },
    l: {
      iconSize: "24",
      strokeWidth: "2"
    },
    xl: {
      iconSize: "32",
      strokeWidth: "1.6"
    }
  };

  return iconSizes[size];
};
