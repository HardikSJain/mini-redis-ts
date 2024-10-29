export function handleEcho(message: string): string {
  return `$${message.length}\r\n${message}\r\n`;
}
