import { MAX_INDEX, NEXT_BLOCK, PREV_BLOCK, TO_BLOCK } from "@redux/actionTypes"
import { MaxBlockIndex, NextBlock, PrevBlock, ToBlock } from "@redux/types"

export const nextBlock: NextBlock = { type: NEXT_BLOCK }
export const prevBlock: PrevBlock = { type: PREV_BLOCK }
export const toBlock = (blockIndex: number): ToBlock => ({
    type: TO_BLOCK,
    blockIndex,
})
export const maxBlockIndex = (maxIndex: number): MaxBlockIndex => ({
    type: MAX_INDEX,
    maxIndex,
})
