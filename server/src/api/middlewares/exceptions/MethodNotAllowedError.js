const ClientError = require('./ClientError');

class MethodNotAllowed extends ClientError {
  constructor(message) {
    super(message, 405);
    this.name = 'Method Not Allowed';
  }
}

module.exports = MethodNotAllowed;
