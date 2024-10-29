# 🚀 mini-redis-ts

A lightweight Redis clone implemented in TypeScript, featuring core Redis commands and key expiration functionality.

## ✨ Features

- Core Redis commands implementation:
  - `PING` - Server healthcheck
  - `ECHO` - Echo back messages
  - `GET` - Retrieve stored values
  - `SET` - Store key-value pairs with optional expiry
- Key expiration support using `PX` milliseconds option
- RESP (Redis Serialization Protocol) compliance
- Written in TypeScript for type safety and better developer experience

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mini-redis-ts.git

# Navigate to project directory
cd mini-redis-ts

# Install dependencies
npm install

# Build the project
npm run dev
```

## 📝 Usage

The server runs on `localhost:6379` by default, making it compatible with the standard Redis CLI:

```bash
# Using redis-cli
redis-cli

# Basic commands
> PING
PONG

> SET mykey "Hello World"
OK

> GET mykey
"Hello World"

# Set with expiration (5000 milliseconds)
> SET mykey "Hello World" PX 5000
OK

> GET mykey  # Returns value
"Hello World"

# After 5 seconds...
> GET mykey  # Returns nil
(nil)
```

## 🏗️ Project Structure

```
mini-redis-ts/
├── src/
│   ├── commands/        # Command implementations
│   │   ├── ping.ts
│   │   ├── echo.ts
│   │   ├── get.ts
│   │   └── set.ts
│   ├── types.ts         # TypeScript interfaces
│   ├── storage.ts       # In-memory storage implementation
│   ├── utils/
│   │   └── parser.ts    # RESP protocol parser
│   └── main.ts        # Main server file
├── package.json
└── tsconfig.json
```

<!-- ## 🧪 Running Tests

```bash
npm test
``` -->

<!-- ## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request -->

<!-- ## 📜 License

MIT License - feel free to use this project for learning, development, or production. -->

<!-- ## 🌟 Future Enhancements

- [ ] Support for more Redis commands
- [ ] Persistence to disk
- [ ] Cluster support
- [ ] More expiration options (EX, EXAT, PXAT)
- [ ] Command pipeline support -->
