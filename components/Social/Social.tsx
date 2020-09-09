import styles from "./social.module.sass"
import VK from "@public/assets/social/vk.svg"
import Github from "@public/assets/social/github.svg"
import Linkedin from "@public/assets/social/linkedin.svg"
import classNames from "classnames"

interface SocialProps {
    className?: string
}

const Social: React.FunctionComponent<SocialProps> = ({ className }) => {
    return (
        <ul className={classNames(styles.social, className)}>
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
