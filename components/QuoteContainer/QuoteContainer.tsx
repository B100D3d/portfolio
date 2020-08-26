import styles from "./quote-container.module.sass"
import useQuote from "@hooks/useQuote"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const QuoteContainer = () => {
    const quote = useQuote(9000)

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
