import { spawnSync } from 'child_process';
import path from 'path';

const cliPath = path.resolve(__dirname, '../../dist/bin/cli.js');

describe('CLI', () => {
  it('prints help with --help', () => {
    const result = spawnSync('node', [cliPath, '--help'], { encoding: 'utf-8' });
    expect(result.stdout).toMatch(/Usage|Help/i);
  });

  it('errors when no args are passed', () => {
    const result = spawnSync('node', [cliPath], { encoding: 'utf-8' });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toMatch(/missing|error/i);
  });
});
