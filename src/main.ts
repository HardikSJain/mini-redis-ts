import * as net from "net";
import { handlePing } from "./commands/ping";
import { handleEcho } from "./commands/echo";
import { handleSet } from "./commands/set";
import { handleGet } from "./commands/get";
import { parseCommand } from "./utils/parser";

const server: net.Server = net.createServer((connection: net.Socket) => {
  connection.on("data", (data) => {
    console.log("\nReceived:", JSON.stringify(data.toString()));

    const { command, args } = parseCommand(data.toString());

    let response: string;
    try {
      switch (command) {
        case "PING":
          response = handlePing();
          break;
        case "ECHO":
          response = handleEcho(args[0]);
          break;
        case "SET":
          response = handleSet(args);
          break;
        case "GET":
          response = handleGet(args[0]);
          break;
        default:
          response = "-ERR unknown command\r\n";
      }
    } catch (error) {
      console.error("Error:", error);
      response =
        "-ERR " +
        (error instanceof Error ? error.message : "internal error") +
        "\r\n";
    }

    connection.write(response);
  });
});

server.listen(6379, "127.0.0.1");
