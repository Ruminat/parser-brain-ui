export function isEmpty<T>(value: T | undefined | null): value is undefined | null {
  return value === undefined || value === null || Number.isNaN(value);
}

export function notEmpty<T>(value: T | undefined | null): value is T {
  return !isEmpty(value);
}
