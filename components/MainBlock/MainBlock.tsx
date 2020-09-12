import styles from "./main-block.module.sass"
import classNames from "classnames"
import MainBlockBackground from "@components/MainBlock/MainBlockBackground/MainBlockBackground"
import QuoteContainer from "@components/QuoteContainer/QuoteContainer"
import MainAbout from "@components/MainAbout/MainAbout"
import Social from "@components/Social/Social"
import { BlockProps } from "@types"
import { useSelector } from "react-redux"
import { isMobileSelector, pageLoadedSelector } from "@redux/selectors/main"

interface MainBlockProps extends BlockProps {
    className?: string
}

const MainBlock: React.FunctionComponent<MainBlockProps> = ({
    id,
    className,
}) => {
    const pageLoaded = useSelector(pageLoadedSelector)
    const isMobile = useSelector(isMobileSelector)

    return (
        <section
            id={id}
            className={classNames(
                styles.mainBlockContainer,
                className,
                "block",
                { [styles.animate]: pageLoaded }
            )}
        >
            <MainBlockBackground />
            <div className={styles.contentContainer}>
                <MainAbout />
                <QuoteContainer />
                <Social
                    className={styles.contentContainer__contacts}
                    shownNetworks={["vk", "github", "linkedin"]}
                />
                <i className={styles.contentContainer__scrollNSwipe}>
                    {isMobile ? "Swipe" : "Scroll"}
                </i>
            </div>
        </section>
    )
}

export default MainBlock
