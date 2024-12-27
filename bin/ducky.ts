#!/usr/bin/env node
import { compile } from '../src/compiler';
import { runScript } from '../src/runner';
import * as path from 'path';

async function main() {
  const [,, command, ...args] = process.argv;

  switch (command) {
    case 'compile': {
      const scriptPath = args[0];
      if (!scriptPath) {
        console.error('Please provide a script path');
        process.exit(1);
      }

      try {
        await compile(scriptPath, {
          outputDir: path.dirname(scriptPath)
        });
        console.log('Compilation successful!');
      } catch (error) {
        console.error('Compilation failed:', error);
        process.exit(1);
      }
      break;
    }
    case 'run': {
      const scriptPath = args[0];
      if (!scriptPath) {
        console.error('Please provide a script path');
        process.exit(1);
      }

      try {
        console.log('Running script...');
        await runScript(scriptPath);
        console.log('Script execution completed!');
      } catch (error) {
        console.error('Script execution failed:', error);
        process.exit(1);
      }
      break;
    }
    default:
      console.log('Available commands: compile, run');
      process.exit(1);
  }
}

main(); 