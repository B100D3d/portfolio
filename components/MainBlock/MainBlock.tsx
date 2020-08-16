import MainBlockBackground from "@/components/MainBlock/MainBlockBackground/MainBlockBackground"
import Logo from "@/components/Logo/Logo"
import QuoteContainer from "@/components/QuoteContainer/QuoteContainer"

import styles from "./main-block.module.sass"

const MainBlock = () => {
    return (
        <div className={styles.mainBlockContainer}>
            <MainBlockBackground />
            <header>
                <Logo />
            </header>
            <main>
                <div style={{ visibility: "hidden" }}>test</div>
                <QuoteContainer />
            </main>
        </div>
    )
}

export default MainBlock
