import { AsideHeader } from "@gravity-ui/navigation";
import React, { useState } from "react";
import { svgBrain } from "../../common/icons";

const logoProps = { icon: svgBrain, text: "Brain" };

export const Navigation: React.FC = () => {
  const [compact, setCompact] = useState(true);

  return <AsideHeader logo={logoProps} compact={compact} onChangeCompact={() => setCompact(!compact)} />;
};
