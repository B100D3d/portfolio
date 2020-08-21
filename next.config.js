const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
    devIndicators: {
        autoPrerender: false,
    },
    include: path.resolve(__dirname, "public/assets"),
    webpack(config, options) {
        return config
    },
})
