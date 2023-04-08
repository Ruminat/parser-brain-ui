import React, { memo, useEffect, useState } from "react";
import { getParsersStatuses } from "../../models/ParserActivity/api";
import { TParserActivity } from "../../models/ParserActivity/definitions";
import { ParsersActivitiesTable } from "../ActivitiesTable";

export const ParsersAdminMonitor: React.FC = memo(function ParsersAdminMonitor() {
  const [items, setItems] = useState<TParserActivity[]>([]);

  useEffect(() => {
    getParsersStatuses()
      .then((result) => setItems(result))
      .catch((error) => console.log(error));
  }, []);

  return <ParsersActivitiesTable items={items} />;
});
