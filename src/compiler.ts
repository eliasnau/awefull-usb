import * as fs from 'fs';
import * as path from 'path';
import { DuckyOptions } from './types';
import { clear, getScript, setProtocol } from './commands';

export async function compile(scriptPath: string, options: DuckyOptions = {}): Promise<string> {
  // Clear any previous commands
  clear();
  
  // Set protocol if specified
  if (options.protocol) {
    setProtocol(options.protocol);
  }

  try {
    // Import and execute the script
    const fullPath = path.resolve(scriptPath);
    await import(fullPath);
    
    // Get the generated script
    const output = getScript();
    
    if (options.outputDir) {
      const fileName = path.basename(scriptPath).replace(/\.(ts|js)$/, '.badusb');
      const outputPath = path.join(options.outputDir, fileName);
      fs.writeFileSync(outputPath, output);
    }

    return output;
  } catch (error) {
    console.error('Error compiling script:', error);
    throw error;
  }
} 