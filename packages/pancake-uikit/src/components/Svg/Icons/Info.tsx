import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width = "18" height = "24" href = {'images/pixel/TOCO_DOCS_ICON.png'}/>
    </Svg>
  );
};

export default Icon;
