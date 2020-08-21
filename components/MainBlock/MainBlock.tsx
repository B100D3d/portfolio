import styles from "./main-block.module.sass"
import MainBlockBackground from "@components/MainBlock/MainBlockBackground/MainBlockBackground"
import QuoteContainer from "@components/QuoteContainer/QuoteContainer"
import About from "@components/About/About"
import Social from "@components/Social/Social"

const MainBlock = () => {
    return (
        <div className={styles.mainBlockContainer}>
            <MainBlockBackground />
            <main>
                <About />
                <QuoteContainer />
                <Social />
            </main>
        </div>
    )
}

export default MainBlock
