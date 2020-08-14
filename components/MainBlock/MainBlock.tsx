import useWindowSize from "@/hooks/useWindowSize"
import { useMemo } from "react"

import styles from "./main-block.module.sass"

const MainBlock = () => {
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
        <div className={styles.mainBlockContainer}>
            <div
                style={{
                    "--sideLength": `${backgroundSideLength}px`,
                }}
                className={styles["mainBlockContainer__mainBlockBackground"]}
            >
                <div className={styles["mainBlockContainer__backgroundClip"]} />
            </div>
        </div>
    )
}

export default MainBlock
