import * as yargs from 'yargs';
import {scan} from 'fs-nextra';
import {Command} from './base/Command';

(async () => {
	const cli = yargs
		.help()
		.group('help', 'Special:')
		.version()
		.alias('version', 'v')
		.group('version', 'Special:')
		.completion('completion')
		.wrap(yargs.terminalWidth())
		.recommendCommands();

	const dirs = await scan('./commands', {
		depthLimit: 2,
		filter: stat => stat.name.endsWith('.js') && stat.isFile()
	});

	for (const file of [...dirs.keys()]) {
		// eslint-disable-next-line no-await-in-loop
		const cmd = await import(file) as unknown as Command<undefined>;
		cli.command(cmd.cmdString, cmd.description);
	}
})();
