import { isEmpty } from "../../common/core/utils";
import { ELocalStorageKey, LOCAL_STORAGE_DEFAULTS, TLocalStorage } from "./definitions";

export function readFromLocalStorage<TKey extends ELocalStorageKey>(key: TKey): TLocalStorage[TKey] {
  try {
    const value = localStorage.getItem(key);

    console.log(value);

    if (isEmpty(value)) {
      return LOCAL_STORAGE_DEFAULTS[key];
    } else {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log("Local storage error", error);
    return LOCAL_STORAGE_DEFAULTS[key];
  }
}
