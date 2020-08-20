import styles from "./main-block.module.sass"
import MainBlockBackground from "@/components/MainBlock/MainBlockBackground/MainBlockBackground"
import QuoteContainer from "@/components/QuoteContainer/QuoteContainer"
import About from "@/components/About/About"

const MainBlock = () => {
    return (
        <div className={styles.mainBlockContainer}>
            <MainBlockBackground />
            <main>
                <About />
                <QuoteContainer />
            </main>
        </div>
    )
}

export default MainBlock
