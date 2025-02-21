const logger = require("../utils/logger").getInstance();

const requestLog = function (req, res, next) {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const remoteAddress = socket.remoteAddress;
  const remoteFamily = socket.remoteFamily;

  logger.log("warn", {
    timestamp: Date.now(),
    rawHeaders,
    httpVersion,
    method,
    remoteAddress,
    remoteFamily,
    url,
  });

  next();
};

module.exports = requestLog;
