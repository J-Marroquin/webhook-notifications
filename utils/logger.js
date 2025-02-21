const winston = require("winston");

class privateLogger {
  constructor() {
    const logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.splat(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({
          filename: "./logs/error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "./logs/request.log",
          level: "warn",
        }),
      ],
    });

    if (process.env.NODE_ENV !== "production") {
      logger.add(new winston.transports.Console({ level: "info" }));
    }
    return logger;
  }
}

class Logger {
  constructor() {
    throw new Error("Use Singleton.getInstance()");
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new privateLogger();
    }
    return Logger.instance;
  }
}

module.exports = Logger;
