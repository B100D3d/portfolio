import styles from "./technologies-list.module.sass"
import classNames from "classnames"
import { Technology } from "@types"

interface TechnologiesListProps {
    className?: string
    technologies: Array<Technology>
}

const TechnologiesList: React.FunctionComponent<TechnologiesListProps> = ({
    className,
    technologies = [],
}) => {
    return (
        <div
            className={classNames(styles.technologiesListContainer, className)}
        >
            <span>Used technologies</span>
            <hr />
            <ul className={styles.technologiesList}>
                {technologies.map((technology, i) => (
                    <li
                        key={technology.name}
                        className={classNames(styles.technology, {
                            [styles["technology--reverse"]]: i % 2 !== 0,
                        })}
                    >
                        <img src={technology.icon} alt="" />
                        <span>{technology.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TechnologiesList
