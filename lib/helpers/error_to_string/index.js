const BadRequestError = require("../errors/basdRequest")
const NotFoundError = require("../errors/notFound")
const UnauthorizedError = require("../errors/unAuthorized")
const ServerError = require("../errors/serverError")

class Helper {
    /**
     *
     * @param {object} error - The error object
     * @returns {Object} - The an error instance
     * @memberof Helper
     */
    static processError (error) {
      switch (error.response.status) {
        case 400:
          throw new BadRequestError({ message: error.response.data.message, status: error.response.data.status })
        case 401:
          throw new UnauthorizedError({ message: error.response.data.message, status: error.response.data.status })
        case 404:
          throw new NotFoundError({ message: error.response.data.message, status: error.response.data.status })
        default:
          throw new ServerError({ message: error.response.data.message, status: error.response.data.status })
      }
    }
  }
  
  module.exports = Helper