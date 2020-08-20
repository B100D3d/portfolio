import styles from "./rainbow-button.module.sass"
import classNames from "classnames"
import { useEffect } from "react"
import { registerCSSColorProperty } from "@/utils/css"

interface RainbowButtonProps {
    children?: React.ReactNode
    className?: string
    initialColors?: Array<string>
}

const INITIAL_COLORS = ["#7367F0", "#8E2DE2", "#4A00E0"]

const RainbowButton: React.FunctionComponent<RainbowButtonProps> = ({
    children,
    className,
    initialColors = INITIAL_COLORS,
}) => {
    useEffect(() => {
        initialColors.forEach((color, i) => {
            registerCSSColorProperty(`--color-${i}`, color)
        })
    }, [])

    return (
        <button className={classNames(styles.rainbowButton, className)}>
            {children}
        </button>
    )
}

export default RainbowButton
