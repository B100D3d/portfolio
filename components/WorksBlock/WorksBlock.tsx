import styles from "./works-block.module.sass"
import classNames from "classnames"
import { BlockProps } from "@types"
import WorksContainer from "@components/WorksContainer/WorksContainer"
import { useSelector } from "react-redux"
import { isMobileSelector } from "@redux/selectors/main"
import GlowingBackground from "@components/GlowingBackground/GlowingBackground"

interface WorksBlockProps extends BlockProps {
    className?: string
}

const WorksBlock: React.FunctionComponent<WorksBlockProps> = ({
    id,
    className,
    animate,
    willChange,
}) => {
    const isMobile = useSelector(isMobileSelector)

    return (
        <section
            id={id}
            className={classNames(
                styles.worksBlockContainer,
                className,
                "block",
                {
                    [styles.animate]: animate,
                    [styles.willChange]: willChange,
                }
            )}
        >
            <div className={styles.contentContainer}>
                {!isMobile && (
                    <GlowingBackground
                        willChange={willChange}
                        animate={animate}
                    />
                )}
                <WorksContainer willChange={willChange} animate={animate} />
            </div>
        </section>
    )
}

export default WorksBlock
