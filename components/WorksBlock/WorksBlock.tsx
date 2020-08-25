import styles from "./works-block.module.sass"
import classNames from "classnames"
import { BlockProps } from "@types"

interface WorksBlockProps extends BlockProps {
    id?: string
    className?: string
}

const WorksBlock: React.FunctionComponent<WorksBlockProps> = ({
    id,
    className,
    animate = false,
}) => {
    return (
        <section
            id={id}
            className={classNames(styles.worksBlockContainer, className, {
                [styles.animate]: animate,
            })}
        ></section>
    )
}

export default WorksBlock
