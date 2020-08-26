import styles from "./works-block.module.sass"
import classNames from "classnames"
import GlowingPiece from "@components/GlowingPiece/GlowingPiece"
import { BlockProps } from "@types"
import { useLayoutEffect, useState } from "react"
import { random } from "@utils"
import ColorFilledText from "@components/ColorFilledText/ColorFilledText"

interface WorksBlockProps extends BlockProps {
    id?: string
    className?: string
}

const WorksBlock: React.FunctionComponent<WorksBlockProps> = ({
    id,
    className,
    animate = false,
}) => {
    const [glowingStyles, setGlowingStyles] = useState<
        Array<React.CSSProperties>
    >([])
    const [contentHover, setContentHover] = useState(false)

    useLayoutEffect(() => {
        if (animate) {
            setGlowingStyles(getGlowingStyles())
        }
    }, [animate])

    return (
        <section
            id={id}
            className={classNames(styles.worksBlockContainer, className, {
                [styles.animate]: animate,
            })}
        >
            <div
                onMouseOver={() => setContentHover(true)}
                onMouseOut={() => setContentHover(false)}
                className={styles.contentContainer}
            >
                <div className={styles.contentContainer__background} />
                <div className={styles.glowingContainer}>
                    {glowingStyles.map((style) => (
                        <GlowingPiece
                            key={style.top}
                            form="random"
                            style={style}
                        />
                    ))}
                </div>
                <div className={styles.contentContainer__title}>
                    <ColorFilledText delay="100ms" animate={contentHover}>
                        TGMT
                    </ColorFilledText>
                </div>
                <div className={styles.contentContainer__avatar}>AVATAR</div>
                <div className={styles.contentContainer__description}>
                    There will be an obfuscate description that reveal on hover
                </div>
            </div>
        </section>
    )
}

const getGlowingStyles = (): Array<React.CSSProperties> => [
    {
        top: "10%",
        left: `${random(30, 70)}%`,
    },
    {
        top: "50%",
        left: `${random(5, 40)}%`,
    },
    {
        top: "80%",
        left: `${random(60, 95)}%`,
    },
]

export default WorksBlock
