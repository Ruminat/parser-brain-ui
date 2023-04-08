export enum ELocalStorageKey {
  ADMIN_TOKEN = "adminToken",
}

export type TLocalStorage = {
  [ELocalStorageKey.ADMIN_TOKEN]: string;
};

export const LOCAL_STORAGE_DEFAULTS: TLocalStorage = {
  [ELocalStorageKey.ADMIN_TOKEN]: "",
};
