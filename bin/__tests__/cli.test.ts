import { execa } from 'execa';

test('CLI displays help', async () => {
  const { stdout } = await execa('node', ['dist/bin/cli.js', '--help']);
  expect(stdout).toContain('Usage');
});
