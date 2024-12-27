export type Protocol = 'standard' | 'custom';

export interface DuckyCommand {
  standard: string;
  custom: string;
}

export interface DuckyOptions {
  protocol?: Protocol;
  outputDir?: string;
} 