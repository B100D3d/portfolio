import styles from "./header.module.sass"
import Anchor from "@components/Anchor/Anchor"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.sizer}>DEV</div>
            <ul>
                <li>
                    <Anchor to="main-block" data-text="Home">
                        Home
                    </Anchor>
                </li>
                <li>
                    <Anchor to="works-block" data-text="Works">
                        Works
                    </Anchor>
                </li>
                <li>
                    <Anchor to="about-block" data-text="About">
                        About
                    </Anchor>
                </li>
            </ul>
        </header>
    )
}

export default Header
