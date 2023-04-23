
// Custom http error class to handle errors in a better way
class HttpError extends Error {
  constructor (message, status) {
    super(message)
    this.status = status
  }
}

module.exports = HttpError