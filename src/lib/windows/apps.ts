import { shortcut, delay, type, key, Keys } from '../../commands';
import { bypassUAC } from './system';

export function openFileExplorer() {
  shortcut([Keys.GUI, "e"]);
}

// Admin does NOT work if not executed from a BadUSB.
export function openTerminal(admin = false) {
  shortcut([Keys.GUI, "x"]);
  delay(150);
  if (admin) {
    key("a");
    bypassUAC();
  } else {
    key("i")
  }
}

export function runProgram(program: string) {
  shortcut([Keys.GUI, "r"]);
  delay(300);
  type(program);
  key(Keys.ENTER);
  delay(500);
}
