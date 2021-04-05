const { VUE_APP_NODE_ENV } = process.env

export function log(level = 'info' || 'warn' || 'error', ...message) {
  // WHEN RUNNING WEBPACK WITH `PRODUCTION` build,
  // IT WILL REMOVE FOLLOWING CODE.

  if (VUE_APP_NODE_ENV !== 'production') {
    switch (level) {
      case 'error':
        window.console.error(...message)
        break

      case 'info':
        window.console.info(...message)
        break

      case 'trace':
        window.console.trace(...message)
        break

      case 'warn':
        window.console.warn(...message)
        break

      case 'debug':
        window.console.debug(...message)
        break

      default:
        window.console.log(level, ...message)
        break
    }
  }
}

export default log
