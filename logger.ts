class Logger {
  log(type, ...args) {
    console.log(`${type}`, ...args);
  }

  debug(...args) {
    this.log("[Debug]", ...args);
  }

  info(...args) {
    this.log("[Info]", ...args);
  }

  error(...args) {
    this.log("[Error]", ...args);
  }
}

export default new Logger();
