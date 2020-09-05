import styles from "./logo.module.sass"
import { useCallback, useEffect, useState } from "react"
import { addChars, removeLastChars } from "@utils/animation"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"

const LOGO_TEXT = "DEV."
const SUB_TEXT = "ourer"

const Logo = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
    const [logoText, setLogoText] = useState(LOGO_TEXT)
    const [subLogoText, setSubLogoText] = useState("")

    const animate = useCallback(async () => {
        await removeLastChars(1, 500, setLogoText)
        await addChars(SUB_TEXT, 150, setSubLogoText)
    }, [])

    useEffect(() => {
        if (pageLoaded) {
            animate()
        }
    }, [pageLoaded])

    return (
        <div
            className={classNames(styles.logo, {
                [styles.animate]: pageLoaded,
            })}
        >
            <span data-text={logoText} className={styles.logo__glitch}>
                {logoText}
            </span>
            <span
                className={`${styles.logo__glitch} ${styles["logo--small"]}`}
                data-text={subLogoText}
            >
                {subLogoText}
            </span>
        </div>
    )
}

export default Logo
