import { readFromLocalStorage } from "../../models/LocalStorage";
import { ELocalStorageKey } from "../../models/LocalStorage/definitions";

const PORT = process.env.BACKEND_PORT ? `:${process.env.BACKEND_PORT}` : "";
const host = PORT ? `http://localhost${PORT}` : "";

console.log("THE PORT IS", PORT);

type TWithError = { result: "ERROR"; error: string };

export async function postRequest<TResponse>(url: string, body: unknown): Promise<TResponse> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(body), // body data type must match 'Content-Type' header
  });

  return response.json(); // parses JSON response into native JavaScript objects
}

export async function apiPostRequest<TResponse>(path: string, body: unknown): Promise<TResponse> {
  apiPathCheck(path);
  const response = await postRequest<{ result: TResponse } | TWithError>(`${host}${path}`, body);
  if (response && "result" in response && "error" in response && response.result === "ERROR") {
    throw new Error(response.error);
  }
  return response.result as TResponse;
}

export async function getRequest<TResponse>(url: string): Promise<TResponse> {
  console.log("JOPA!", url);
  const response = await fetch(url);
  return response.json() as Promise<TResponse>;
}

export async function apiGetRequest<TResponse>(path: string): Promise<TResponse> {
  apiPathCheck(path);
  const response = await getRequest<{ result: TResponse } | TWithError>(`${host}${path}`);
  if (response && "result" in response && "error" in response && response.result === "ERROR") {
    throw new Error(response.error);
  }
  return response.result as TResponse;
}

function apiPathCheck(path: string): void {
  if (!path.startsWith("/api/")) {
    throw new Error("API requests must start with `/api/` prefix");
  }
}

export function setAdminToken(value: string): void {
  // @ts-expect-error just because
  window.API_TOKEN = value;
}
setAdminToken(readFromLocalStorage(ELocalStorageKey.ADMIN_TOKEN));

export function getAdminToken(): string | undefined {
  // @ts-expect-error just because
  return window.API_TOKEN;
}

export function getAdminTokenParam(): string {
  return `adminToken=${getAdminToken()}`;
}
