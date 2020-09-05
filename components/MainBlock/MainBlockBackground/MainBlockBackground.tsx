import styles from "./main-block-background.module.sass"
import useWindowSize from "@hooks/useWindowSize"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"

const MainBlockBackground = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
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
            className={classNames(
                styles.mainBlockContainer__mainBlockBackground,
                { [styles.animate]: pageLoaded }
            )}
        >
            <div className={styles.mainBlockContainer__backgroundClip} />
        </div>
    )
}

export default MainBlockBackground
