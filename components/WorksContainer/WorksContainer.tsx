import styles from "./works.module.sass"
import classNames from "classnames"
import ColorFilledText from "@components/ColorFilledText/ColorFilledText"
import { useState } from "react"

const WorksContainer = () => {
    const [contentHover, setContentHover] = useState(false)

    return (
        <div
            onMouseOver={() => setContentHover(true)}
            onMouseOut={() => setContentHover(false)}
            className={classNames(styles.worksContainer, {
                [styles.hover]: contentHover,
            })}
        >
            <div className={styles.worksContainer__title}>
                <ColorFilledText delay="100ms" animate={contentHover}>
                    TGMT
                </ColorFilledText>
            </div>
            <div className={styles.worksContainer__avatar}>AVATAR</div>
            <div className={styles.worksContainer__description}>
                There will be an obfuscate description that reveal on hover
            </div>
        </div>
    )
}

export default WorksContainer
