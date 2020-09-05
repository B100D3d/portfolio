import styles from "./quote-container.module.sass"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import useSliderItem from "@hooks/useSliderItem"
import quotes from "@components/QuoteContainer/Quotes"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"

const QuoteContainer = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
    const [quote] = useSliderItem(quotes, {
        interval: 10000,
        randomFirst: true,
    })
    return (
        <div
            className={classNames(styles.container, {
                [styles.animate]: pageLoaded,
            })}
        >
            <div className={styles.quoteContainer}>
                <i />
                <div className={styles.quoteBox}>
                    <div className={styles.contentContainer}>
                        <TransitionGroup>
                            <CSSTransition
                                key={quote.key}
                                classNames="fade-slide"
                                timeout={1000}
                            >
                                <div className={styles.textContainer}>
                                    <span
                                        className={styles.textContainer__title}
                                    >
                                        {quote.title}
                                    </span>
                                    <span
                                        className={styles.textContainer__quote}
                                    >
                                        {quote.text}
                                    </span>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteContainer
