import useScrollByBlock from "@hooks/useScrollByBlock"

interface AnchorProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    children: React.ReactNode
    className?: string
    to: string
}

const Anchor: React.FunctionComponent<AnchorProps> = ({
    children,
    className,
    to,
    ...props
}) => {
    const { toBlock } = useScrollByBlock()

    return (
        <a onClick={() => toBlock(to)} className={className} {...props}>
            {children}
        </a>
    )
}

export default Anchor
