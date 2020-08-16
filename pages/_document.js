import Document, { Head, Main, NextScript } from "next/document"
import { readFileSync } from "fs"
import { join } from "path"
import { memoize } from "lodash"

const doGetContent = (file) =>
    readFileSync(join(process.cwd(), ".next", file), "utf8")
const getContent =
    process.env.NODE_ENV === "production" ? memoize(doGetContent) : doGetContent

class InlineStylesHead extends Head {
    getCssLinks() {
        return this.__getInlineStyles()
    }

    __getInlineStyles() {
        const { assetPrefix, files } = this.context
        if (!files || files.length === 0) return null

        return files
            .filter((file) => /\.css$/.test(file))
            .map((file) => (
                <style
                    key={file}
                    nonce={this.props.nonce}
                    data-href={`${assetPrefix}/_next/${file}`}
                    dangerouslySetInnerHTML={{
                        __html: getContent(file),
                    }}
                />
            ))
    }
}

export default class CustomDocument extends Document {
    render() {
        return (
            <html>
                <InlineStylesHead />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
