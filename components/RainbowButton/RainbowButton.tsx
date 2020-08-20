import styles from "./rainbow-button.module.sass"
import classNames from "classnames"
import { useEffect } from "react"
import { registerCSSColorProperty } from "@/utils/css"

interface RainbowButtonProps {
    children?: React.ReactNode
    className?: string
    initialColors?: Array<string>
}

const INITIAL_COLORS = ["#B326FF", "#5F26FF", "hsl(240deg, 100%, 45%)"]

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
