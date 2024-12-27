# Ducky Script TypeScript

A TypeScript implementation of BadUSB/Rubber Ducky scripts with additional features and type safety.

## Installation

```bash
npm install ducky-script
```

## Basic Usage

```typescript
import { delay, key, type, println, shortcut, setProtocol, Keys } from 'ducky-script';
import { COPY, PASTE, SELECT_ALL } from 'ducky-script/shortcuts';

// Set protocol (standard or custom(will be available soon))
setProtocol('standard');

// Basic typing
type("Hello World");
println("This adds a newline automatically");

// Key presses
key(Keys.ENTER);
key(Keys.TAB);

// Shortcuts
shortcut([Keys.GUI, "r"]); // Windows + R
shortcut(COPY);           // Ctrl + C
shortcut(SELECT_ALL);     // Ctrl + A
```

## Available Commands

### Basic Commands
- `type(text: string)` - Type text
- `println(text: string)` - Type text and press enter
- `key(key: Keys)` - Press a single key
- `shortcut(keys: readonly KeyType[])` - Press multiple keys together
- `delay(ms: number)` - Wait for specified milliseconds

### Predefined Shortcuts
```typescript
import { COPY, PASTE, CUT, SELECT_ALL, SAVE, FIND, UNDO, REDO } from 'ducky-script/shortcuts';

shortcut(COPY);      // Ctrl + C
shortcut(PASTE);     // Ctrl + V
shortcut(SELECT_ALL); // Ctrl + A
// etc...
```

### Available Keys
```typescript
import { Keys } from 'ducky-script';

// Special keys
Keys.GUI
Keys.CTRL
Keys.ALT
Keys.SHIFT
Keys.ENTER
Keys.TAB
Keys.SPACE
Keys.BACKSPACE
Keys.DELETE
Keys.ESCAPE

// Arrow keys
Keys.UP
Keys.DOWN
Keys.LEFT
Keys.RIGHT

// Function keys
Keys.F1 through Keys.F12

// And many more...
```

## Examples

### Simple Notepad Example
```typescript
import { delay, key, type, println, shortcut, setProtocol, Keys } from 'ducky-script';
import { COPY, PASTE } from 'ducky-script/shortcuts';

setProtocol('standard');

// Open notepad
shortcut([Keys.GUI, "r"]);
delay(300);
type("notepad");
key(Keys.ENTER);
delay(500);

// Type some text
println("Hello from Ducky Script!");
println("This is a new line");

// Copy and paste
shortcut(SELECT_ALL);
shortcut(COPY);
key(Keys.ENTER);
shortcut(PASTE);
```

## Running Scripts

### Compile to BadUSB
```bash
npm run ducky compile script.ts
```

### Direct Execution
```bash
npm run ducky run script.ts
```

## Features
- 🚀 Fast execution
- 📝 TypeScript support
- 🔒 Type-safe shortcuts and keys
- 🔄 Compile to BadUSB or run directly
- ⌨️ Full keyboard support
- 🎯 Precise timing control

## Notes
- When running scripts directly, make sure you have the necessary permissions
- Some shortcuts might behave differently on different operating systems
- Use delays when needed to ensure reliable execution 