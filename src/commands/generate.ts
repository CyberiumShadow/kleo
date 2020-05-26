import {Command, flags} from '@oclif/command';

export default class Generate extends Command {
	static description = 'Initialize klara for use in this project';

	static examples = [
		`$ kl init
hello world from ./src/hello.ts!
`
	];

	static flags = {
		help: flags.help({char: 'h'}),
		// Flag with a value (-n, --name=VALUE)
		dir: flags.string({char: 'd',
			description: 'directory to put the bot in'}),
		// Flag with no value (-f, --force)
		force: flags.boolean({char: 'f', description: 'forces the creation on a folder that already exists'})
	};

	static args = [{name: 'bot name'}];

	async run() {
		const {args, flags} = this.parse(Generate);

		this.log(`Generating new bot ${args.dir ?? 'klasa-bot'} ${flags.force ? '(forced)' : ''}`);
	}
}
