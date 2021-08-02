import React from "react";
import { ZenithStack, ZenithInput, ZenithLabel } from "./StyledZenithToggle";
import { ZenithToggleProps, scales } from "./types";

const ZenithToggle: React.FC<ZenithToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <ZenithStack scale={scale}>
    <ZenithInput id={props.id || "zenith-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ZenithLabel scale={scale} checked={checked} htmlFor={props.id || "zenith-toggle"}>
      <div className="zeniths">
        <div className="zenith" />
        <div className="zenith" />
        <div className="zenith" />
        <div className="butter" />
      </div>
    </ZenithLabel>
  </ZenithStack>
);

ZenithToggle.defaultProps = {
  scale: scales.MD,
};

export default ZenithToggle;
