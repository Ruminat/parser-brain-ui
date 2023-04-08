import React from "react";
import { getAdminToken } from "../common/api";
import { ParsersAdminMonitor } from "./components/AdminMonitor";

export const ParserApp: React.FC = () => {
  const token = getAdminToken();

  if (!token) return <>Access denied</>;

  return <ParsersAdminMonitor />;
};
