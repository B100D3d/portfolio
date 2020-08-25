import useScrollByBlock from "@hooks/useScrollByBlock"
import { useCallback, useRef } from "react"
import classNames from "classnames"
import { timeout } from "@utils"

interface AnchorProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    children: React.ReactNode
    className?: string
    active?: boolean
    activeClassName?: string
    timeout?: number
    to: string
}

const Anchor: React.FunctionComponent<AnchorProps> = ({
    children,
    className,
    active = false,
    activeClassName = "",
    timeout: ms = 0,
    to,
    ...props
}) => {
    const { toBlock } = useScrollByBlock()
    const anchorRef = useRef() as React.RefObject<HTMLAnchorElement>

    const handleClick = useCallback(async () => {
        await timeout(ms)
        toBlock(to)
    }, [toBlock, to, ms])

    return (
        <a
            ref={anchorRef}
            onClick={handleClick}
            className={classNames(className, { [activeClassName]: active })}
            {...props}
        >
            {children}
        </a>
    )
}

export default Anchor
