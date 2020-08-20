import styles from "./header.module.sass"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.sizer}>DEV</div>
            <ul>
                <li>
                    <a data-text="Home">Home</a>
                </li>
                <li>
                    <a data-text="Works">Works</a>
                </li>
                <li>
                    <a data-text="About">About</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
