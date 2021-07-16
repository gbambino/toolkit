import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface Logo extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<Logo> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <image width = "174" height = "29" href = {isDark ? 'images/pixel/LogoDark.png' : 'images/pixel/LogoWhite.png'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
