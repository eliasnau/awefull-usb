import { shortcut, delay, type, key, Keys } from '../../commands';

export function openLink(url: string) {
  shortcut([Keys.GUI, "r"]);
  delay(300);
  type(url);
  key(Keys.ENTER);
  delay(500);
}

// Search functions
export function searchGoogle(query: string) {
  openLink(`https://google.com/search?q=${encodeURIComponent(query)}`);
}

export function searchYoutube(query: string) {
  openLink(`https://youtube.com/results?search_query=${encodeURIComponent(query)}`);
}

export function searchGithub(query: string) {
  openLink(`https://github.com/search?q=${encodeURIComponent(query)}`);
}

// Social media shortcuts
export function openGithub() {
  openLink("https://github.com");
}

export function openGmail() {
  openLink("https://gmail.com");
}

export function openTwitter() {
  openLink("https://twitter.com");
}

// Browser navigation (when browser is focused)
export function refreshPage() {
  shortcut([Keys.CTRL, "r"]);
}

export function newTab() {
  shortcut([Keys.CTRL, "t"]);
}

export function closeTab() {
  shortcut([Keys.CTRL, "w"]);
}

export function nextTab() {
  shortcut([Keys.CTRL, Keys.TAB]);
}

export function previousTab() {
  shortcut([Keys.CTRL, Keys.SHIFT, Keys.TAB]);
}

export function goBack() {
  shortcut([Keys.ALT, Keys.LEFT]);
}

export function goForward() {
  shortcut([Keys.ALT, Keys.RIGHT]);
}

// Browser dev tools
export function openDevTools() {
  shortcut([Keys.CTRL, Keys.SHIFT, "i"]);
}

export function openConsole() {
  shortcut([Keys.CTRL, Keys.SHIFT, "j"]);
}

export function viewSource() {
  shortcut([Keys.CTRL, "u"]);
}

// Zoom controls
export function zoomIn() {
  shortcut([Keys.CTRL, Keys.SHIFT, "+"]);
}

export function zoomOut() {
  shortcut([Keys.CTRL, "-"]);
}

export function resetZoom() {
  shortcut([Keys.CTRL, "0"]);
}   