import { shortcut, delay, type, key, Keys } from '../../commands';

export function lockScreen() {
  shortcut([Keys.GUI, "l"]);
}

export function showDesktop() {
  shortcut([Keys.GUI, "d"]);
}

export function openTaskManager() {
  shortcut([Keys.CTRL, Keys.SHIFT, "esc"]);
}

export function minimizeAll() {
  shortcut([Keys.GUI, "m"]);
}

export function bypassUAC() {
  key(Keys.LEFT)
  delay(10)
  key(Keys.ENTER);
}
