const BaseError = require('./baseError')

class ServerError extends BaseError {
  
  constructor (options = {}) {
    super(options)
    this.name = this.constructor.name
    this.message = options.message
    this.status = options.status
  }
}

module.exports = ServerError