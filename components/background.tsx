"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useIsDark } from "./theme";

export const Background = () => {
  const isDark = useIsDark();
  return (
    <Dithering
      colorBack={isDark ? "#141414" : "#e5e5e5"}
      colorFront="#E85D04"
      shape="wave"
      type="8x8"
      size={2.2}
      speed={0.86}
      scale={0.68}
      className="absolute top-0 left-0 w-full h-screen -z-10 opacity-20 dithering-effect"
    />
  );
};
