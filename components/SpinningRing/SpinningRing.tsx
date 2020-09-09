import styles from "./spinning-ring.module.sass"
import classNames from "classnames"

interface SpinningRingProps {
    text: string
    className?: string
    animate?: boolean
}

const SpinningRing: React.FunctionComponent<SpinningRingProps> = ({
    text,
    className,
    animate,
}) => (
    <ul
        style={{
            "--angle": `${Math.floor(360 / text.length)}deg`,
        }}
        className={classNames(styles.spinningRings, className, {
            [styles.animate]: animate,
        })}
    >
        {text.split("").map((letter, i) => (
            <li key={letter + i}>{letter}</li>
        ))}
    </ul>
)

export default SpinningRing
