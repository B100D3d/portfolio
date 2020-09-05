import styles from "./social.module.sass"
import VK from "@public/assets/social/vk.svg"
import Github from "@public/assets/social/github.svg"
import Linkedin from "@public/assets/social/linkedin.svg"
import { useSelector } from "react-redux"
import { pageLoadedSelector } from "@redux/selectors/main"
import classNames from "classnames"

const Social = () => {
    const pageLoaded = useSelector(pageLoadedSelector)
    return (
        <ul
            className={classNames(styles.social, {
                [styles.animate]: pageLoaded,
            })}
        >
            <li className={styles.vk}>
                <a rel="noreferrer" target="_blank" href="https://vk.com/a13xb">
                    <VK />
                </a>
            </li>
            <li className={styles.github}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/B100D3d"
                >
                    <Github />
                </a>
            </li>
            <li className={styles.linkedin}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/a13xb/"
                >
                    <Linkedin />
                </a>
            </li>
        </ul>
    )
}

export default Social
