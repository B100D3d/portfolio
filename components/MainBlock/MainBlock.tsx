import styles from "./main-block.module.sass"
import classNames from "classnames"
import MainBlockBackground from "@components/MainBlock/MainBlockBackground/MainBlockBackground"
import QuoteContainer from "@components/QuoteContainer/QuoteContainer"
import About from "@components/About/About"
import Social from "@components/Social/Social"
import { BlockProps } from "@types"
import { useSelector } from "react-redux"
import { isMobileSelector } from "@redux/selectors/main"

interface MainBlockProps extends BlockProps {
    id?: string
    className?: string
    isMobile?: boolean
}

const MainBlock: React.FunctionComponent<MainBlockProps> = ({
    id,
    className,
}) => {
    const isMobile = useSelector(isMobileSelector)

    return (
        <section
            id={id}
            className={classNames(styles.mainBlockContainer, className)}
        >
            <MainBlockBackground />
            <div className={styles.contentContainer}>
                <About />
                <QuoteContainer />
                <Social />
                <i>{isMobile ? "Swipe" : "Scroll"}</i>
            </div>
        </section>
    )
}

export default MainBlock
