kleo
=====

Manage your klasa bot with ease!

[![oclif](https://img.shields.io/static/v1?label=built%20using&message=oclif&color=green&style=flat-square)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/kleo.svg)](https://npmjs.org/package/kleo)
[![Codecov](https://codecov.io/gh/cfanoulis/kleo/branch/master/graph/badge.svg)](https://codecov.io/gh/cfanoulis/kleo)
[![Downloads/week](https://img.shields.io/npm/dw/kleo.svg)](https://npmjs.org/package/kleo)
[![License](https://img.shields.io/npm/l/kleo.svg)](https://github.com/cfanoulis/kleo/blob/master/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g kleo
$ kl COMMAND
running command...
$ kl (-v|--version|version)
kleo/0.0.1 linux-x64 node-v14.3.0
$ kl --help [COMMAND]
USAGE
  $ kl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kl generate [BOT NAME]`](#kl-generate-bot-name)
* [`kl help [COMMAND]`](#kl-help-command)

## `kl generate [BOT NAME]`

Initialize klara for use in this project

```
USAGE
  $ kl generate [BOT NAME]

OPTIONS
  -d, --dir=dir  directory to put the bot in
  -f, --force    forces the creation on a folder that already exists
  -h, --help     show CLI help

EXAMPLE
  $ kl generate
  hello world from ./src/hello.ts!
```

_See code: [src/commands/generate.ts](https://github.com/cfanoulis/kleo/blob/v0.0.1/src/commands/generate.ts)_

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
