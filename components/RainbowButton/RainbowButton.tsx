import styles from "./rainbow-button.module.sass"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { registerCSSColorProperty } from "@utils/css"
import useRainbow from "@hooks/useRainbow"

interface RainbowButtonProps {
    children?: React.ReactNode
    className?: string
    colors?: Array<string>
}

const COLORS: Array<string> = [
    "#7367F0",
    "#8E2DE2",
    "#4A00E0",
    "#00e7f7",
    "#00C2F1",
    "#CE9FFC",
    "#6D107E",
    "#F03358",
    "#FF6A28",
    "#FF6A28",
    "#F03358",
    "#E100FF",
]

const RainbowButton: React.FunctionComponent<RainbowButtonProps> = ({
    children,
    className,
    colors = COLORS,
}) => {
    const [isEnabled, setEnabled] = useState(false)
    const gradientColors = useRainbow({ colors, interval: 2000 })

    useEffect(() => {
        colors.slice(0, 3).forEach((color, i) => {
            const isEnabled = registerCSSColorProperty(`--rb-color-${i}`, color)
            setEnabled(isEnabled)
        })
    }, [])

    return (
        <button
            style={
                isEnabled
                    ? gradientColors.reduce(
                          (style, color, i) => ({
                              ...style,
                              [`--rb-color-${i}`]: color,
                          }),
                          {}
                      )
                    : undefined
            }
            className={classNames(styles.rainbowButton, className)}
        >
            {children}
        </button>
    )
}

export default RainbowButton
