export enum Keys {
  GUI = 'GUI',
  CTRL = 'CTRL',
  ALT = 'ALT',
  SHIFT = 'SHIFT',
  ENTER = 'ENTER',
  TAB = 'TAB',
  SPACE = 'SPACE',
  BACKSPACE = 'BACKSPACE',
  DELETE = 'DELETE',
  ESCAPE = 'ESCAPE',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',
}

export type KeyType = Keys | string;

export const KeyMappings = {
  robotjs: {
    [Keys.GUI]: 'command',
    [Keys.CTRL]: 'control',
    [Keys.ALT]: 'alt',
    [Keys.SHIFT]: 'shift',
    [Keys.ENTER]: 'enter',
    [Keys.TAB]: 'tab',
    [Keys.SPACE]: 'space',
    [Keys.BACKSPACE]: 'backspace',
    [Keys.DELETE]: 'delete',
    [Keys.ESCAPE]: 'escape',
    [Keys.UP]: 'up',
    [Keys.DOWN]: 'down',
    [Keys.LEFT]: 'left',
    [Keys.RIGHT]: 'right',
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  } as Record<string, string>,

  standard: {
    format: (key: KeyType) => `SEND_KEY ${key}`,
  },
  custom: {
    format: (key: KeyType) => `KEY_PRESS "${key}"`,
  }
}; 