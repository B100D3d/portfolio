import styles from "./quote-container.module.sass"
import useQuote from "@/hooks/useQuote"
import { CSSTransition, SwitchTransition } from "react-transition-group"

const QuoteContainer = () => {
    const quote = useQuote(9000)

    return (
        <div className={styles.quoteBox}>
            <i />
            <div className={styles.textBoxBackground} />
            <div className={styles.textBox}>
                <SwitchTransition>
                    <CSSTransition
                        key={quote?.key}
                        classNames="fade-slide"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <div className={styles.textContainer}>
                            <span className={styles["textContainer__title"]}>
                                {quote?.title}
                            </span>
                            <span className={styles["textContainer__quote"]}>
                                {quote?.text}
                            </span>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    )
}

export default QuoteContainer
