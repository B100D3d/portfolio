import styles from "./about-block.module.sass"
import { BlockProps } from "@types"
import classNames from "classnames"
import SpinningRing from "@components/SpinningRing/SpinningRing"
import { useMemo } from "react"
import Social from "@components/Social/Social"

type AboutBlockProps = BlockProps

const age = () => {
    const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 365
    const currentDate = new Date().getTime()
    const birthday = new Date(2000, 4, 1).getTime()
    return Math.floor((currentDate - birthday) / MILLISECONDS_IN_YEAR)
}

const ABOUT_TEXT = `
I'm a ${age()}-year-old developer from Russia. 
I really like to make cool things and learn how to do it. 
Looking for a good job ;)
`

const AboutBlock: React.FunctionComponent<AboutBlockProps> = ({
    id,
    animate,
}) => {
    const aboutText = useMemo(() => ABOUT_TEXT.split(" "), [])

    return (
        <section
            id={id}
            className={classNames(styles.aboutBlock, "block", {
                [styles.animate]: animate,
            })}
        >
            <div className={styles.noiseBackground} />
            <img className={styles.tree} src="assets/tree.webp" alt="" />
            <SpinningRing
                text="人の淡い夢と夢絡まり燃える炎"
                className={styles.spinner}
                animate={animate}
            />
            <div className={styles.aboutContainer}>
                <div className={styles.aboutTextContainer}>
                    {aboutText.map((word, i) => {
                        return (
                            <span
                                className={styles.aboutTextContainer__word}
                                key={word + i}
                            >
                                {word}&nbsp;
                            </span>
                        )
                    })}
                </div>
                <span className={styles.aboutContainer__contactsTitle}>
                    CONTACTS
                </span>
                <div className={styles.contactsContainer}>
                    <Social className={styles.contactsContainer__contacts} />
                </div>
            </div>
        </section>
    )
}

export default AboutBlock
