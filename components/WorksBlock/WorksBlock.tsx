import styles from "./works-block.module.sass"
import classNames from "classnames"
import { BlockProps } from "@types"
import WorksContainer from "@components/WorksContainer/WorksContainer"
import { useSelector } from "react-redux"
import { isMobileSelector } from "@redux/selectors/main"
import GlowingBackground from "@components/GlowingBackground/GlowingBackground"

interface WorksBlockProps extends BlockProps {
    id?: string
    className?: string
}

const WorksBlock: React.FunctionComponent<WorksBlockProps> = ({
    id,
    className,
    animate,
}) => {
    const isMobile = useSelector(isMobileSelector)

    return (
        <section
            id={id}
            className={classNames(styles.worksBlockContainer, className, {
                [styles.animate]: animate,
            })}
        >
            <div className={styles.contentContainer}>
                <GlowingBackground animate={animate} />
                <div
                    className={classNames(styles.contentContainer__background, {
                        [styles.blur]: !isMobile,
                    })}
                />
                <WorksContainer />
            </div>
        </section>
    )
}

export default WorksBlock
