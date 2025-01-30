/**
 * @file Reporters - Reporter
 * @module log/reporters/Reporter
 */

import type { LogObject, Logger } from '@flex-development/log'

/**
 * Log reporter API.
 *
 * @category
 *  reporters
 *
 * @class
 * @abstract
 */
abstract class Reporter {
  /**
   * The logger this reporter writes to.
   *
   * @see {@linkcode Logger}
   *
   * @public
   * @instance
   * @member {Logger}
   */
  public logger!: Logger

  /**
   * Initialize the reporter.
   *
   * @see {@linkcode Logger}
   *
   * @public
   * @instance
   *
   * @param {Logger} logger
   *  The logger `this` reporter writes to
   * @return {undefined}
   */
  public init(logger: Logger): undefined {
    return void (this.logger = logger)
  }

  /**
   * Define how a log message is processed and displayed by `this` reporter.
   *
   * @see {@linkcode LogObject}
   * @see {@linkcode Logger}
   *
   * @public
   * @abstract
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @return {undefined | void}
   */
  public abstract write(info: LogObject): undefined | void
}

export default Reporter
