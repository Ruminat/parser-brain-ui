import React from "react";
import { getAdminToken } from "../common/api";
import { Layout } from "../layout";
import { ParsersAdminMonitor } from "./components/AdminMonitor";

export const ParserApp: React.FC = () => {
  const token = getAdminToken();

  if (!token) return <>Access denied</>;

  return (
    <Layout>
      <ParsersAdminMonitor />
    </Layout>
  );
};
