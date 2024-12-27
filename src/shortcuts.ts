import { Keys } from './keys';

export const COPY = [Keys.CTRL, "c"] as const;
export const PASTE = [Keys.CTRL, "v"] as const;
export const CUT = [Keys.CTRL, "x"] as const;
export const SELECT_ALL = [Keys.CTRL, "a"] as const;
export const SAVE = [Keys.CTRL, "s"] as const;
export const FIND = [Keys.CTRL, "f"] as const;
export const UNDO = [Keys.CTRL, "z"] as const;
export const REDO = [Keys.CTRL, "y"] as const;

export const QUICK_LAUNCH = [Keys.GUI, "x"] as const; 