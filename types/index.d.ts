import * as CSS from "csstype"

declare global {
    namespace React {
        export interface CSSProperties extends CSS.Properties<string | number> {
            "--sideLength"?: string
        }
    }
}
