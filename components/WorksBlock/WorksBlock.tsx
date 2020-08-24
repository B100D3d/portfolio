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
        <div
            id={id}
            className={classNames(styles.worksBlockContainer, className, {
                [styles.animate]: animate,
            })}
        ></div>
    )
}

export default WorksBlock
