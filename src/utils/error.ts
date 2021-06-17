export class UnknownError extends Error {
  constructor(message) {
    super(message)
    this.name = '未知错误'
  }
}
