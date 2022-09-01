const BaseError = require('./baseError')

class NotFoundError extends BaseError {
  
  constructor (options = {}) {
    super(options)
    this.name = this.constructor.name
    this.message = options.message
    this.status = options.status
  }
}

module.exports = NotFoundError