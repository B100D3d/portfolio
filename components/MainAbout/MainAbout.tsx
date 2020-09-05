import styles from "./main-about.module.sass"
import ColorFilledText from "@components/ColorFilledText/ColorFilledText"
import { useCallback, useEffect, useRef, useState } from "react"
import { timeout } from "@utils"
import { revealText } from "@utils/animation"
import RainbowButton from "@components/RainbowButton/RainbowButton"
import Anchor from "@components/Anchor/Anchor"
import Obfuscator from "@utils/obfuscator"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"
const animationTimeout = 3700

const MainAbout = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
    const [aboutText, setAboutText] = useState("I'm junior frontend developer.")
    const [colorFill, setColorFill] = useState(false)
    const nameTitleRef = useRef() as React.RefObject<HTMLDivElement>

    const fillText = useCallback(() => setColorFill(true), [])

    const revealAbout = useCallback(async () => {
        const reveal = revealText(new Obfuscator(aboutText), {
            duration: 1200,
        })
        for await (const text of reveal) {
            setAboutText(text)
        }
    }, [])

    useEffect(() => {
        if (pageLoaded) {
            timeout(animationTimeout).then(() => {
                fillText()
                revealAbout()
            })
        }
    }, [pageLoaded])

    return (
        <div
            className={classNames(styles.aboutContainer, {
                [styles.animate]: pageLoaded,
            })}
        >
            <div ref={nameTitleRef} className={styles.aboutContainer__title}>
                <ColorFilledText animate={colorFill}>Hello.</ColorFilledText>
            </div>
            <div className={styles.aboutContainer__title}>
                <ColorFilledText animate={colorFill}>
                    I&apos;m Denis
                </ColorFilledText>{" "}
            </div>
            <span className={styles.aboutContainer__about}>{aboutText}</span>
            <Anchor
                timeout={300}
                to="about-block"
                className={styles.aboutBtnContainer}
            >
                <RainbowButton className={styles.aboutBtn}>
                    About me
                </RainbowButton>
            </Anchor>
        </div>
    )
}

export default MainAbout
