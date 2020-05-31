// Todo: flags for now. will fix
export abstract class Command<A extends DefaultFlags | undefined> {
	public name: string;
	public aliases: string[];
	public usage: string;
	public usageDesc: (yargs: unknown) => void;
	public flags: Record<string, unknown>;
	public description: string;

	public get cmdString(): string {
		return [this.name].concat(this.aliases).join(' ').concat(this.usage);
	}

	constructor(data: CommandData) {
		this.name = data.name;
		this.aliases = data.aliases;
		this.usage = data.usage;
		this.usageDesc = data.usageDesc;
		this.flags = data.flags;
		this.description = data.description ?? '';
	}

	public abstract run(argv: A[]): void;
}

interface CommandData {
	name: string;
	aliases: string[];
	usage: string;
	usageDesc: (yargs: unknown) => void;
	flags: Record<string, unknown>;
	description?: string;
}
