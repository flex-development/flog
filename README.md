# :keyboard: flog

Simple logging utility

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Overview

[Getting Started](#getting-started)  
[Usage](#usage)  
[Built With](#built-with)  
[Contributing](CONTRIBUTING.md)

## Getting Started

Style logs for the console or [terminal][3].

## Installation

```zsh
yarn add @flex-development/flog # or npm i @flex-development/flog
```

## Usage

Customize log entries and create entries based on log `Level` presets.

### Levels

Create a log entry using a `Level` preset.

![log-levels](docs/log-levels.png)

#### Debug

Create a log entry in gray.

```typescript
import flog from '@flex-development/flog'

/**
 * @file Examples - debug log
 * @module flog/docs/examples/debug
 */

flog('debug log')
```

#### Error

Create a log entry with a red cross.

```typescript
import flog from '@flex-development/flog'

/**
 * @file Examples - error log
 * @module flog/docs/examples/error
 */

flog('error log', { level: 'ERROR' })
```

#### Info

Create a log entry with a blue info symbol.

```typescript
import flog from '@flex-development/flog'

/**
 * @file Examples - info log
 * @module flog/docs/examples/info
 */

flog('info log', { level: 'INFO' })
```

#### Success

Create a log entry with a green tick mark.

```typescript
import flog from '@flex-development/flog'

/**
 * @file Examples - success log
 * @module flog/docs/examples/success
 */

flog('success log', { level: 'SUCCESS' })
```

#### Warning

Create a log entry with a yellow exclamation point.

```typescript
import flog from '@flex-development/flog'

/**
 * @file Examples - warning log
 * @module flog/docs/examples/warning
 */

flog('warning log', { level: 'WARN' })
```

### Options

```typescript
export interface FlogOptions {
  /**
   * Log arguments.
   *
   * @default []
   */
  args?: any[]

  /**
   * Bold log arguments **and/or** log data.
   *
   * @default {args:true}
   */
  bold?: FlogOptionsBold

  /**
   * Set log color, and/or override the log figure color set by `level`.
   *
   * @default {args:'white',data:'white'}
   */
  color?: FlogOptionsColor

  /**
   * Override the log figure set by `level`, or omit it altogether.
   */
  figure?: keyof typeof figures | NullishString

  /**
   * Log level.
   *
   * @default 'DEBUG'
   */
  level?: Level

  /**
   * Use [`echo`][1] instead of `console.log`. Requires [`shelljs`][2].
   *
   * [1]: https://github.com/shelljs/shelljs#echooptions-string--string-
   * [2]: https://github.com/shelljs/shelljs
   */
  shell?: boolean

  /**
   * If `true`, do not log any output.
   */
  silent?: boolean
}

type Level = 'DEBUG' | 'ERROR' | 'INFO' | 'SUCCESS' | 'WARN'
```

## Built With

- [`chalk`][1] - Terminal string styling
- [`shelljs`][2] - Unix shell commands implementation for Node.js

[1]: https://github.com/chalk/chalk
[2]: https://github.com/shelljs/shelljs
[3]: https://github.com/shelljs/shelljs#echooptions-string--string-
