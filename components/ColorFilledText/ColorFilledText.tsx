import styles from "./color-filled.module.sass"
import classNames from "classnames"

interface ColorFilledProps {
    className?: string
    children: React.ReactNode
    animate?: boolean
    delay?: string
}

const ColorFilledText: React.FunctionComponent<ColorFilledProps> = ({
    className = "",
    children,
    animate,
    delay = "0s",
}) => {
    return (
        <div className={styles.colorFilled}>
            <span className={styles.colorFilled__back}>{children}</span>
            <span
                style={{
                    "--delay": delay,
                }}
                data-text={children}
                className={classNames(styles.colorFilled__front, className, {
                    [styles.animate]: animate,
                })}
            >
                {children}
            </span>
        </div>
    )
}

export default ColorFilledText
