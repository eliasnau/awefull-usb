import { execute } from './commands';
import * as path from 'path';

export async function runScript(scriptPath: string): Promise<void> {
  console.log('Starting immediately...');
  
  try {
    await import(path.resolve(scriptPath));
    await execute();
  } catch (error) {
    console.error('Failed to run script:', error);
    throw error;
  }
}