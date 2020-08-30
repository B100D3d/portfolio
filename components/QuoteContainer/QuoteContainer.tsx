import styles from "./quote-container.module.sass"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import useSliderItem from "@hooks/useSliderItem"
import quotes, { Quote } from "@components/QuoteContainer/Quotes"

const QuoteContainer = () => {
    const { item: quote } = useSliderItem<Quote>(quotes, { interval: 10000 })

    return (
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
                                <span className={styles.textContainer__title}>
                                    {quote.title}
                                </span>
                                <span className={styles.textContainer__quote}>
                                    {quote.text}
                                </span>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        </div>
    )
}

export default QuoteContainer
