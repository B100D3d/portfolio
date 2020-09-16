const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
    devIndicators: {
        autoPrerender: false,
    },
    include: path.resolve(__dirname, "public/assets"),
    webpack(config, options) {
        const originalEntry = config.entry
        config.entry = async () => {
            const entries = await originalEntry()

            if (
                entries["main.js"] &&
                !entries["main.js"].includes("./polyfills/index.js")
            ) {
                entries["main.js"].unshift("./polyfills/index.js")
            }

            return entries
        }

        return config
    },
})
