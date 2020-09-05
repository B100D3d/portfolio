import styles from "./header.module.sass"
import Anchor from "@components/Anchor/Anchor"
import { useSelector } from "react-redux"
import { currentBlockIndexSelector } from "@redux/selectors/scroll"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"

const Header = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
    const currentBlockIndex = useSelector(currentBlockIndexSelector)
    return (
        <header
            className={classNames(styles.header, {
                [styles.animate]: pageLoaded,
            })}
        >
            <div className={styles.sizer}>DEV</div>
            <ul>
                <li>
                    <Anchor
                        activeClassName={styles.active}
                        to="main-block"
                        data-text="Home"
                        active={currentBlockIndex === 0}
                    >
                        Home
                    </Anchor>
                </li>
                <li>
                    <Anchor
                        activeClassName={styles.active}
                        to="works-block"
                        data-text="Works"
                        active={currentBlockIndex === 1}
                    >
                        Works
                    </Anchor>
                </li>
                <li>
                    <Anchor
                        activeClassName={styles.active}
                        to="about-block"
                        data-text="About"
                        active={currentBlockIndex === 2}
                    >
                        About
                    </Anchor>
                </li>
            </ul>
        </header>
    )
}

export default Header
