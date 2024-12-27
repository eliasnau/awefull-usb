import * as robot from 'robotjs';
import { Protocol } from '../types';
import { Keys, KeyType, KeyMappings } from '../keys';

robot.setKeyboardDelay(0);

interface Command {
  execute(): Promise<void> | void;
  toBadUSB(protocol: Protocol): string;
}

class KeyCommand implements Command {
  constructor(private key: KeyType) {}
  
  execute() {
    robot.setKeyboardDelay(0);
    const robotKey = KeyMappings.robotjs[this.key as Keys] || this.key.toLowerCase();
    robot.keyTap(robotKey);
  }
  
  toBadUSB(protocol: Protocol): string {
    return protocol === 'custom' 
      ? `KEY_PRESS "${this.key}"`
      : `SEND_KEY ${this.key}`;
  }
}

class TypeCommand implements Command {
  constructor(
    private text: string,
    private addNewline: boolean = false
  ) {}
  
  execute() {
    robot.setKeyboardDelay(0);
    for (const char of this.text) {
      robot.keyTap(char.toLowerCase());
    }
    if (this.addNewline) {
      robot.keyTap('enter');
    }
  }
  
  toBadUSB(protocol: Protocol): string {
    return protocol === 'custom'
      ? `WRITE "${this.text}"`
      : `STRING${this.addNewline ? 'LN' : ''} ${this.text}`;
  }
}

class ShortcutCommand implements Command {
  constructor(private keys: readonly KeyType[]) {}
  
  execute() {
    const mainKey = this.keys[this.keys.length - 1];
    const modifiers = this.keys.slice(0, -1).map(k => 
      KeyMappings.robotjs[k as Keys] || k.toLowerCase()
    );
    robot.keyTap(
      KeyMappings.robotjs[mainKey as Keys] || mainKey.toLowerCase(),
      modifiers
    );
  }
  
  toBadUSB(protocol: Protocol): string {
    return protocol === 'custom'
      ? `COMBO "${this.keys.join('+')}"` 
      : `SEND_SHORTCUT ${this.keys.join("+")}`;
  }
}

class DelayCommand implements Command {
  constructor(private ms: number) {}
  
  async execute() {
    await new Promise(resolve => setTimeout(resolve, this.ms));
  }
  
  toBadUSB(protocol: Protocol): string {
    return protocol === 'custom'
      ? `WAIT ${this.ms}ms`
      : `DELAY ${this.ms}`;
  }
}

class CommandQueue {
  private static instance: CommandQueue;
  private commands: Command[] = [];
  private protocol: Protocol = 'standard';
  
  private constructor() {}
  
  static getInstance(): CommandQueue {
    if (!CommandQueue.instance) {
      CommandQueue.instance = new CommandQueue();
    }
    return CommandQueue.instance;
  }

  setProtocol(p: Protocol) {
    this.protocol = p;
  }

  add(command: Command) {
    this.commands.push(command);
  }

  async execute() {
    for (const cmd of this.commands) {
      await cmd.execute();
    }
  }

  compile(): string {
    return this.commands.map(cmd => cmd.toBadUSB(this.protocol)).join('\n');
  }

  clear() {
    this.commands = [];
  }
}

const queue = CommandQueue.getInstance();

export const setProtocol = (p: Protocol) => queue.setProtocol(p);
export const key = (k: KeyType) => queue.add(new KeyCommand(k));
export const type = (text: string) => queue.add(new TypeCommand(text));
export const println = (text: string) => queue.add(new TypeCommand(text, true));
export const shortcut = (keys: readonly KeyType[]) => queue.add(new ShortcutCommand(keys));
export const delay = (ms: number) => queue.add(new DelayCommand(ms));
export const getScript = () => queue.compile();
export const clear = () => queue.clear();
export const execute = () => queue.execute();
export { Keys }; 