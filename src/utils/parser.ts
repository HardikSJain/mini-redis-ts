export function parseCommand(input: string): {
  command: string;
  args: string[];
} {
  const lines = input.split("\r\n");
  const args = lines.slice(4).filter((_, i) => i % 2 === 0);

  // For SET command with PX option
  if (lines[2] === "SET") {
    // Check if any argument contains PX
    for (let i = 0; i < args.length; i++) {
      if (args[i].includes("PX")) {
        // Split the argument containing PX
        const parts = args[i].split(" ");
        // Remove the original argument and add the split parts
        args.splice(i, 1, ...parts);
      }
    }
  }

  return {
    command: lines[2],
    args,
  };
}
