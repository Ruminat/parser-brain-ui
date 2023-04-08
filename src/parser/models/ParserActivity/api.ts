import { apiGetRequest, getAdminTokenParam } from "../../../common/api";
import { TParser } from "../Parser/definitions";
import { TParserActivity } from "./definitions";

type TResponse = Record<TParser["id"], TParserActivity>;

export async function getParsersStatuses(): Promise<TParserActivity[]> {
  const result = await apiGetRequest<TResponse>(`/api/get-parsers-statuses?${getAdminTokenParam()}`);
  const items = Object.values(result);
  items.sort((a, b) => a.time - b.time);
  return items;
}
