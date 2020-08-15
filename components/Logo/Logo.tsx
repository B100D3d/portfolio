import styles from "./logo.module.sass"
import { useEffect, useState } from "react"
import { addChars, removeLastChars } from "@/utils/animation"

const LOGO_TEXT = "DEV."
const SUB_TEXT = "ourer"

const Logo = () => {
    const [logoText, setLogoText] = useState(LOGO_TEXT)
    const [subLogoText, setSubLogoText] = useState("")

    useEffect(() => {
        removeLastChars(1, 1500, setLogoText).then(() =>
            addChars(SUB_TEXT, 150, setSubLogoText)
        )
    }, [])

    return (
        <div className={styles.logo}>
            <span data-text={logoText} className={styles["logo__glitch"]}>
                {logoText}
            </span>
            <span
                className={`${styles["logo__glitch"]} ${styles["logo--small"]}`}
                data-text={subLogoText}
            >
                {subLogoText}
            </span>
        </div>
    )
}

export default Logo
