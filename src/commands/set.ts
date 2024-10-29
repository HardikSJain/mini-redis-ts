import { setValue } from "../storage";

export function handleSet(args: string[]): string {
  const [key, value, ...options] = args;

  if (!key || !value) {
    return "-ERR wrong number of arguments for SET command\r\n";
  }

  let expiryMs: number | undefined;

  for (let i = 0; i < options.length; i++) {
    if (options[i].toUpperCase() === "PX" && i + 1 < options.length) {
      const ms = parseInt(options[i + 1]);
      if (isNaN(ms)) {
        return "-ERR value is not an integer or out of range\r\n";
      }
      expiryMs = ms;
      break;
    }
  }

  // Debug log
  console.log(
    `SET command received: key=${key}, value=${value}, expiryMs=${expiryMs}`
  );

  setValue(key, value, expiryMs);
  return "+OK\r\n";
}
