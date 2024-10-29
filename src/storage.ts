import type { StorageValue } from "./types";

export interface Storage {
  [key: string]: StorageValue;
}

export const storage: Storage = {};

export function getValue(key: string): string | undefined {
  const item = storage[key];

  if (!item) {
    return undefined;
  }

  // Debug log to check expiry time
  console.log(
    `Key: ${key}, Current time: ${Date.now()}, Expiry time: ${item.expiryTime}`
  );

  // Check if key has expired
  if (item.expiryTime && Date.now() >= item.expiryTime) {
    console.log(`Key ${key} has expired, deleting...`);
    delete storage[key];
    return undefined;
  }

  return item.value;
}

export function setValue(key: string, value: string, expiryMs?: number): void {
  let expiryTime: number | undefined = undefined;

  if (expiryMs !== undefined && expiryMs > 0) {
    expiryTime = Date.now() + expiryMs;
    console.log(
      `Setting key ${key} with expiry in ${expiryMs}ms (at ${expiryTime})`
    );
  }

  storage[key] = {
    value,
    expiryTime,
  };
}
