import { apiGetRequest, getAdminTokenParam } from "../../../common/api";

export async function getParsersStatuses() {
  const result = await apiGetRequest(`/api/get-parsers-statuses?${getAdminTokenParam()}`);
  console.log("result", result);
}
