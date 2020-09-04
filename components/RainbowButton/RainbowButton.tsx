import styles from "./rainbow-button.module.sass"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { registerCSSColorProperty } from "@utils/css"
import useRainbow from "@hooks/useRainbow"

interface RainbowButtonProps {
    children?: React.ReactNode
    className?: string
    colors?: Array<string>
    interval?: number
}

interface Ripple {
    top: number
    left: number
    key: string
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
    interval = 2000,
}) => {
    const [isEnabled, setEnabled] = useState(false)
    const gradientColors = useRainbow({ colors, interval })
    const [ripples, setRipples] = useState<Array<Ripple>>([])

    useEffect(() => {
        colors.slice(0, 3).forEach((color, i) => {
            const isEnabled = registerCSSColorProperty(`--rb-color-${i}`, color)
            setEnabled(isEnabled)
        })
    }, [])

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.target as HTMLButtonElement
            const rect = target.getBoundingClientRect()
            const key = String(Math.random())
            setRipples([
                ...ripples,
                {
                    top: e.clientY - rect.top,
                    left: e.clientX - rect.left,
                    key,
                },
            ])
            setTimeout(
                () =>
                    setRipples((ripples) =>
                        ripples.filter((ripple) => ripple.key !== key)
                    ),
                800
            )
        },
        [ripples]
    )

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
            onMouseDown={handleClick}
        >
            <div className={styles.rippleContainer}>
                {ripples.map((ripple) => (
                    <i
                        key={ripple.key}
                        style={{
                            top: ripple.top,
                            left: ripple.left,
                        }}
                        className={styles.ripple}
                    />
                ))}
            </div>
            {children}
        </button>
    )
}

export default RainbowButton
