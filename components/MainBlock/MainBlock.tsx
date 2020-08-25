import styles from "./main-block.module.sass"
import classNames from "classnames"
import MainBlockBackground from "@components/MainBlock/MainBlockBackground/MainBlockBackground"
import QuoteContainer from "@components/QuoteContainer/QuoteContainer"
import About from "@components/About/About"
import Social from "@components/Social/Social"
import { BlockProps } from "@types"

interface MainBlockProps extends BlockProps {
    id?: string
    className?: string
    isMobile?: boolean
}

const MainBlock: React.FunctionComponent<MainBlockProps> = ({
    id,
    className,
    isMobile,
}) => {
    return (
        <section
            id={id}
            className={classNames(styles.mainBlockContainer, className)}
        >
            <MainBlockBackground />
            <main>
                <About />
                <QuoteContainer />
                <Social />
                <i>{isMobile ? "Swipe" : "Scroll"}</i>
            </main>
        </section>
    )
}

export default MainBlock
