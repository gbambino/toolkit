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
      <image width = "30" height = "30" href = {isDark ? 'images/pixel/LogoRound.png' : 'images/pixel/LogoRound.png'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
