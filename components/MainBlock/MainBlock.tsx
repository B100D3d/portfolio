import MainBlockBackground from "@/components/MainBlock/MainBlockBackground/MainBlockBackground"
import Logo from "@/components/Logo/Logo"

import styles from "./main-block.module.sass"

const MainBlock = () => {
    return (
        <div className={styles.mainBlockContainer}>
            <MainBlockBackground />
            <header>
                <Logo />
            </header>
        </div>
    )
}

export default MainBlock
