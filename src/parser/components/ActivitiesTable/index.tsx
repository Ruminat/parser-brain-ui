import { Link, Table, TableColumnConfig } from "@gravity-ui/uikit";
import React, { memo } from "react";
import { timeFromNow } from "../../../common/date/utils";
import { TParserActivity } from "../../models/ParserActivity/definitions";

const columns: TableColumnConfig<TParserActivity>[] = [
  { id: "id", name: "IP", template: (activity) => activity.parser.id },
  { id: "name", name: "Логины", template: (activity) => activity.parser.name },
  {
    id: "url",
    name: "URL",
    template: (activity) =>
      activity.parser.url ? (
        <Link href={activity.parser.url} target="_blank">
          {activity.parser.url}
        </Link>
      ) : null,
  },
  { id: "action", name: "Что", template: (activity) => activity.action },
  { id: "date", name: "Когда", template: (activity) => timeFromNow(activity.time) },
];

type TProps = {
  items: TParserActivity[];
};

export const ParsersActivitiesTable: React.FC<TProps> = memo(function ParsersActivitiesTable(props) {
  return <Table columns={columns} data={props.items} />;
});
