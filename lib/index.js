const { resolve } = require("path")

module.exports = async function module(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "nuxt-mobile-detect/plugin.js"
  })

  this.addTemplate({
    src: resolve(__dirname, "mobileDetect.js"),
    fileName: "nuxt-mobile-detect/mobileDetect.js"
  })
}
