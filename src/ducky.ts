import { Protocol, DuckyCommand } from './types';

export class DuckyScript {
  private static commands: string[] = [];
  private static protocol: Protocol = 'standard';

  static setProtocol(p: Protocol) {
    this.protocol = p;
  }

  private static addCommand(command: DuckyCommand): void {
    this.commands.push(this.protocol === 'custom' ? command.custom : command.standard);
  }

  static key(keyName: string): void {
    this.addCommand({
      standard: `SEND_KEY ${keyName}`,
      custom: `KEY_PRESS "${keyName}"`
    });
  }

  static delay(ms: number): void {
    this.addCommand({
      standard: `DELAY ${ms}`,
      custom: `WAIT ${ms}ms`
    });
  }

  static type(text: string): void {
    this.addCommand({
      standard: `TYPE_TEXT ${text}`,
      custom: `WRITE "${text}"`
    });
  }

  static shortcut(keys: string[]): void {
    this.addCommand({
      standard: `SEND_SHORTCUT ${keys.join("+")}`,
      custom: `COMBO "${keys.join('+')}"`
    });
  }

  static getScript(): string {
    return this.commands.join('\n');
  }

  static clear(): void {
    this.commands = [];
  }
}

export const setProtocol = DuckyScript.setProtocol.bind(DuckyScript);
export const key = DuckyScript.key.bind(DuckyScript);
export const delay = DuckyScript.delay.bind(DuckyScript);
export const type = DuckyScript.type.bind(DuckyScript);
export const shortcut = DuckyScript.shortcut.bind(DuckyScript);
export const getScript = DuckyScript.getScript.bind(DuckyScript);
export const clear = DuckyScript.clear.bind(DuckyScript); 