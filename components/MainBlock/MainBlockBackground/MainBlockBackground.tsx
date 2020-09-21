import styles from "./main-block-background.module.sass"
import useWindowSize from "@hooks/useWindowSize"
import { MutableRefObject, useMemo, useRef } from "react"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"
import useRemoveWillChange from "@hooks/useRemoveWillChange"

const MainBlockBackground = () => {
    const background = useRef() as MutableRefObject<HTMLDivElement>
    const backClip = useRef() as MutableRefObject<HTMLDivElement>
    useRemoveWillChange(background.current, styles.willChange)
    useRemoveWillChange(backClip.current, styles.willChange, "animationend")
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
            ref={background}
            style={
                backgroundSideLength
                    ? {
                          "--sideLength": `${backgroundSideLength}px`,
                      }
                    : undefined
            }
            className={classNames(
                styles.mainBlockContainer__mainBlockBackground,
                styles.willChange,
                { [styles.animate]: pageLoaded }
            )}
        >
            <div
                ref={backClip}
                className={classNames(
                    styles.mainBlockContainer__backgroundClip,
                    styles.willChange
                )}
            />
        </div>
    )
}

export default MainBlockBackground
