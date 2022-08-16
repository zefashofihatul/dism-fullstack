const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 406);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
