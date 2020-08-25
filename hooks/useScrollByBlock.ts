import useWindowSize from "@hooks/useWindowSize"
import { useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentBlockIndexSelector } from "@redux/selectors/scroll"
import {
    nextBlock,
    prevBlock,
    toBlock as toBlockAction,
} from "@redux/actions/scroll"

type NextFN = () => void
type PrevFN = () => void
type ToBlockFN = (blockId: string) => void

type useScrollByBlockHook = () => {
    next: NextFN
    prev: PrevFN
    toBlock: ToBlockFN
    scrollValue: number
}

const useScrollByBlock: useScrollByBlockHook = () => {
    const { width } = useWindowSize()
    const currentBlockIndex = useSelector(currentBlockIndexSelector)
    const dispatch = useDispatch()
    const scrollValue = useMemo(() => (width + 0.5) * currentBlockIndex, [
        width,
        currentBlockIndex,
    ])

    const next = useCallback(() => dispatch(nextBlock), [])
    const prev = useCallback(() => dispatch(prevBlock), [])
    const toBlock = useCallback(
        (blockId: string) => {
            const block = document.querySelector<HTMLElement>(`#${blockId}`)
            const index = block ? Math.round(block.offsetLeft / width) : 0
            dispatch(toBlockAction(index))
        },
        [width]
    )

    return { next, prev, toBlock, scrollValue }
}

export default useScrollByBlock
