import styles from "./about-block.module.sass"
import { BlockProps } from "@types"
import classNames from "classnames"

type AboutBlockProps = BlockProps

const AboutBlock: React.FunctionComponent<AboutBlockProps> = ({ id }) => {
    return (
        <section
            id={id}
            className={classNames(styles.aboutBlock, "block")}
        ></section>
    )
}

export default AboutBlock
