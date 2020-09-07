import styles from "./works.module.sass"
import classNames from "classnames"
import ColorFilledText from "@components/ColorFilledText/ColorFilledText"
import { useCallback } from "react"
import TechnologiesList from "@components/TechnologiesList/TechnologiesList"
import useSliderItem from "@hooks/useSliderItem"
import works from "@components/WorksContainer/Works"
import { CSSTransition, TransitionGroup } from "react-transition-group"

interface WorksContainerProps {
    animate?: boolean
    willChange?: boolean
}

const WorksContainer: React.FunctionComponent<WorksContainerProps> = ({
    animate,
    willChange,
}) => {
    const [work, nextWork, prevWork] = useSliderItem(works)

    const handleNextWork = useCallback(() => {
        nextWork()
    }, [])

    const handlePrevWork = useCallback(() => {
        prevWork()
    }, [])

    return (
        <div className={styles.worksSlider}>
            <button
                className={classNames(
                    styles.worksSlider__sliderBtn,
                    styles["worksSlider__sliderBtn--top"]
                )}
                onClick={handleNextWork}
            />
            <div className={styles.overflowContainer}>
                <TransitionGroup>
                    <CSSTransition
                        key={work.name}
                        classNames={{
                            enter: styles.transitionEnter,
                            enterActive: styles.transitionEnterActive,
                            exit: styles.transitionExit,
                            exitActive: styles.transitionExitActive,
                        }}
                        timeout={2000}
                    >
                        <div
                            className={classNames(styles.worksContainer, {
                                [styles.animate]: animate,
                                [styles.willChange]: willChange,
                            })}
                        >
                            <div className={styles.worksContainer__title}>
                                <ColorFilledText
                                    delay="600ms"
                                    animate={animate}
                                >
                                    {work.name}
                                </ColorFilledText>
                            </div>
                            <div className={styles.centerContainer}>
                                <TechnologiesList
                                    technologies={work.technologies}
                                    className={
                                        styles.centerContainer__technologiesList
                                    }
                                />
                                <div
                                    style={{
                                        backgroundImage: `url(${work.img})`,
                                    }}
                                    className={styles.centerContainer__avatar}
                                />
                            </div>
                            <span
                                className={styles.worksContainer__description}
                            >
                                {work.description}
                                <br />
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={`https://${work.url}`}
                                >
                                    {work.url}
                                </a>
                            </span>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <button
                className={classNames(
                    styles.worksSlider__sliderBtn,
                    styles["worksSlider__sliderBtn--bottom"]
                )}
                onClick={handlePrevWork}
            />
        </div>
    )
}

export default WorksContainer
