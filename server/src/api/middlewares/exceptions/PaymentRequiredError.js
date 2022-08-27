const ClientError = require('./ClientError');

class PaymentRequiredError extends ClientError {
  constructor(message) {
    super(message, 402);
    this.name = 'PaymentRequiredError';
  }
}

module.exports = PaymentRequiredError;
