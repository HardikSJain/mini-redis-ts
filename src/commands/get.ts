import { getValue } from "../storage";

export function handleGet(key: string): string {
  console.log(`GET command received for key: ${key}`);

  if (!key || key.trim() === "") {
    return "$-1\r\n";
  }

  const value = getValue(key);

  console.log(`GET result for key ${key}: ${value}`);

  if (value === undefined || value === null) {
    return "$-1\r\n";
  }

  return `$${value.length}\r\n${value}\r\n`;
}
