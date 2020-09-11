import styles from "./social.module.sass"
import VK from "@public/assets/social/vk.svg"
import Github from "@public/assets/social/github.svg"
import Linkedin from "@public/assets/social/linkedin.svg"
import Telegram from "@public/assets/social/telegram.svg"
import Gmail from "@public/assets/social/gmail.svg"
import classNames from "classnames"

type Network = "vk" | "github" | "linkedin" | "telegram" | "gmail"
interface NetworkData {
    link: string
    SVG: string
}

const networks: Record<Network, NetworkData> = {
    vk: {
        link: "https://vk.com/a13xb",
        SVG: VK,
    },
    github: {
        link: "https://github.com/B100D3d",
        SVG: Github,
    },
    linkedin: {
        link: "https://www.linkedin.com/in/a13xb/",
        SVG: Linkedin,
    },
    telegram: {
        link: "https://t.me/a13xb",
        SVG: Telegram,
    },
    gmail: {
        link: "mailto:alexblooded@gmail.com",
        SVG: Gmail,
    },
}

interface SocialProps {
    className?: string
    shownNetworks?: Array<Network>
}

const Social: React.FunctionComponent<SocialProps> = ({
    className,
    shownNetworks,
}) => {
    return (
        <ul className={classNames(styles.social, className)}>
            {(shownNetworks ?? Object.keys(networks)).map((network) => {
                const { link, SVG } = networks[network as Network]
                return (
                    <li key={network} className={styles[network]}>
                        <a rel="noreferrer" target="_blank" href={link}>
                            <SVG />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Social
