import styles from "./glowing-background.module.sass"
import GlowingPiece from "@components/GlowingPiece/GlowingPiece"
import { useEffect, useState } from "react"
import { random } from "@utils"

interface GlowingBackgroundProps {
    animate?: boolean
    willChange?: boolean
}

const GlowingBackground: React.FunctionComponent<GlowingBackgroundProps> = ({
    animate,
    willChange,
}) => {
    const [glowingStyles, setGlowingStyles] = useState<
        Array<React.CSSProperties>
    >([])

    useEffect(() => {
        if (animate) {
            setGlowingStyles(getGlowingStyles())
        }
    }, [animate])

    return (
        <div className={styles.glowingContainer}>
            {glowingStyles.map((style, i) => (
                <GlowingPiece
                    key={i}
                    form="random"
                    style={style}
                    animate={animate}
                    willChange={willChange}
                />
            ))}
        </div>
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

export default GlowingBackground
