import { ActionBar } from "@gravity-ui/navigation";
import React, { PropsWithChildren } from "react";
import { Navigation } from "./navigation";

import "./style.css";

type TProps = {
  actionBar?: React.ReactNode;
};

export const Layout: React.FC<PropsWithChildren<TProps>> = (props) => {
  const { actionBar } = props;

  return (
    <>
      <div className={"sidebar"}>
        <Navigation />
      </div>
      <div className={"main"}>
        {actionBar ? (
          <div className="navbar">
            <ActionBar>{actionBar}</ActionBar>
          </div>
        ) : null}
        <div className="page">{props.children}</div>
      </div>
    </>
  );
};
