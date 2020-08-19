import styles from "./color-filled.module.sass"

interface ColorFilledProps {
    className?: string
    children: React.ReactNode
    animate?: boolean
}

const ColorFilledText: React.FunctionComponent<ColorFilledProps> = ({
    className = "",
    children,
    animate = true,
}) => {
    return (
        <div className={styles.colorFilled}>
            <span className={styles["colorFilled__back"]}>{children}</span>
            <span
                data-text={children}
                className={`${styles["colorFilled__front"]} ${className} ${
                    animate ? styles.animate : ""
                }`}
            >
                {children}
            </span>
        </div>
    )
}

export default ColorFilledText
