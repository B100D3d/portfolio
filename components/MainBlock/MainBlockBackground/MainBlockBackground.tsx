import styles from "./main-block-background.module.sass"
import useWindowSize from "@/hooks/useWindowSize"
import { useMemo } from "react"

const MainBlockBackground = () => {
    const windowSize = useWindowSize()
    const backgroundSideLength = useMemo(
        () =>
            Math.ceil(
                Math.sqrt(
                    2 *
                        Math.pow(
                            windowSize.width / 2 + windowSize.height / 2,
                            2
                        )
                )
            ),
        [windowSize]
    )

    return (
        <div
            style={
                backgroundSideLength
                    ? {
                          "--sideLength": `${backgroundSideLength}px`,
                      }
                    : undefined
            }
            className={styles.mainBlockContainer__mainBlockBackground}
        >
            <div className={styles.mainBlockContainer__backgroundClip} />
        </div>
    )
}

export default MainBlockBackground
