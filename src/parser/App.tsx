import { Button, TextInput } from "@gravity-ui/uikit";
import React, { useState } from "react";
import { setAdminToken } from "../common/api";
import { getParsersStatuses } from "./models/ParserActivity/api";

export const ParserApp: React.FC = () => {
  const [token, setToken] = useState("");

  const updateToken = (updated: string) => {
    setToken(updated);
    setAdminToken(updated);
  };

  const getStatuses = () => getParsersStatuses();

  return (
    <>
      <div className="banner">
        <div className="header">Parser Brain</div>
      </div>
      <div className="admin-panel">
        <div className="token">
          <TextInput type="password" placeholder="Admin token" value={token} onUpdate={updateToken} />
        </div>
        <div className="statuses">
          <Button onClick={getStatuses}>Get statuses</Button>
        </div>
      </div>
    </>
  );
};
