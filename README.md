klara
=====

Manage your klasa bot with ease!

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/klara.svg)](https://npmjs.org/package/klara)
[![Codecov](https://codecov.io/gh/cfanoulis/klara/branch/master/graph/badge.svg)](https://codecov.io/gh/cfanoulis/klara)
[![Downloads/week](https://img.shields.io/npm/dw/klara.svg)](https://npmjs.org/package/klara)
[![License](https://img.shields.io/npm/l/klara.svg)](https://github.com/cfanoulis/klara/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g klara
$ kl COMMAND
running command...
$ kl (-v|--version|version)
klara/0.0.0 linux-x64 node-v14.3.0
$ kl --help [COMMAND]
USAGE
  $ kl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kl hello [FILE]`](#kl-hello-file)
* [`kl help [COMMAND]`](#kl-help-command)

## `kl hello [FILE]`

describe the command here

```
USAGE
  $ kl hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ kl hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/cfanoulis/klara/blob/v0.0.0/src/commands/hello.ts)_

## `kl help [COMMAND]`

display help for kl

```
USAGE
  $ kl help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
