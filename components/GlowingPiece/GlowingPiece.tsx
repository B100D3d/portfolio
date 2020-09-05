import styles from "./glowing-piece.module.sass"
import classNames from "classnames"
import { useMemo } from "react"
import { random } from "@utils"

const colors = ["#FF008B", "#FD0079", "#940CFE", "#51EAFF"]
const forms = ["circle", "superellipse"] as const

type GlowForm = typeof forms[number] | "random"

interface GlowingPieceProps {
    animate?: boolean
    willChange?: boolean
    style?: React.CSSProperties
    form: GlowForm
}

const GlowingPiece: React.FunctionComponent<GlowingPieceProps> = ({
    style,
    form,
    animate,
    willChange,
}) => {
    const formClass = useMemo(
        () =>
            form === "random"
                ? styles[`glow--${forms[random(forms.length)]}`]
                : styles[`glow--${form}`],
        [form]
    )
    const animationClass = useMemo(
        () => styles[`glow--animation-${random(1, 4)}`],
        [animate]
    )
    const color = useMemo(() => colors[random(colors.length)], [style])

    return (
        <span
            style={{
                ...style,
                "--glow-color": color,
            }}
            className={classNames(styles.glow, formClass, animationClass, {
                [styles.animate]: animate,
                [styles.willChange]: willChange,
            })}
        />
    )
}

export default GlowingPiece
