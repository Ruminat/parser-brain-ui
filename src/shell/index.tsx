import React, { PropsWithChildren } from "react";

import style from "./style.module.css";

type TProps = PropsWithChildren;

export const Shell: React.FC<TProps> = (props) => {
  return <div className={style.Shell}>{props.children}</div>;
};
