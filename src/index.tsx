import React from "react";
import ReactDOM from "react-dom/client";
import { ParserApp } from "./parser/App";

import "@gravity-ui/uikit/styles/styles.css";

const $reactRoot = document.createElement("div");
$reactRoot.className = "react-root";
document.body.appendChild($reactRoot);

document.body.classList.add("yc-root");
document.body.classList.add("yc-root_theme_light");

const root = ReactDOM.createRoot($reactRoot);
root.render(<ParserApp />);
