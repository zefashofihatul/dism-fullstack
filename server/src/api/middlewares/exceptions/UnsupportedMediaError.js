const ClientError = require('./ClientError');

class UnsuportedMediaError extends ClientError {
  constructor(message) {
    super(message, 415);
    this.name = 'UnsuportedMediaError';
  }
}

module.exports = UnsuportedMediaError;
