const mobileDetectPlugin = require("mobile-detect")

export default class MobileDetect {
  constructor(ctx) {
    this.ctx = ctx
    let userAgent = ""
    if (process.client) {
      userAgent = navigator.userAgent
    }
    if (process.server) {
      userAgent = this.ctx.req.headers["user-agent"]
    }
    return new mobileDetectPlugin(userAgent)
  }
}
