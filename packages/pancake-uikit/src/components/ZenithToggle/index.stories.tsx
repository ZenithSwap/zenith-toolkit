import React, { useState } from "react";
import ZenithToggle from "./ZenithToggle";

export default {
  title: "Components/ZenithToggle",
  component: ZenithToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ZenithToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <ZenithToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
