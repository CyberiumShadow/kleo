import {Command, flags} from '@oclif/command';
import {prompt} from 'enquirer';
import {mkdir, writeFile} from 'fs/promises';
import c from 'ansi-colors';
export default class Init extends Command {
	static description = 'Initialize klara for use in this bot';

	static examples = [
		`$ kl init
hello world from ./src/hello.ts!
`
	];

	static flags = {
		help: flags.help({char: 'h'}),
		lang: flags.string({
			options: ['js', 'ts'],
			description: 'the language your bot is programmed in',
			char: 'l'
		}),
		dir: flags.string({
			description: 'where your bot\'s source code is stored',
			char: 'd'
		})
	};

	async run() {
		const {flags} = this.parse<InitFlags, Record<string, unknown>>();

		const {lang} = typeof flags.lang === 'undefined' ? await prompt({
			name: 'lang',
			type: 'select',
			message: 'Select the language you made your bot in',
			choices: ['JS', 'TS']
		}) : flags;

		const {dir} = typeof flags.dir === 'undefined' ? await prompt({
			name: 'dir',
			type: 'input',
			message: 'Where are your bot\'s source code located',
			choices: ['JS', 'TS']
		}) : flags;

		const configFile = JSON.stringify({srcLanguage: lang, srcDirectory: dir});
		await mkdir('./.kleo');
		await writeFile('./.kleo/conf.json', configFile);
		this.log(c.greenBright('Initialized kleo in this folder. Have fun!'));
	}
}
interface InitFlags {
	help: boolean;
	lang: 'js' | 'ts' | null;
	dir: string;
}
