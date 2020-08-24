import { MAX_INDEX, NEXT_BLOCK, PREV_BLOCK, TO_BLOCK } from "@redux/actionTypes"

export interface BlockProps {
    animate?: boolean
}

export interface ScrollState {
    currentBlockIndex: number
    maxBlockIndex: number
}

export interface NextBlock {
    type: typeof NEXT_BLOCK
}

export interface PrevBlock {
    type: typeof PREV_BLOCK
}

export interface ToBlock {
    type: typeof TO_BLOCK
    blockIndex: number
}

export interface MaxBlockIndex {
    type: typeof MAX_INDEX
    maxIndex: number
}

export type ScrollActionTypes = NextBlock | PrevBlock | ToBlock | MaxBlockIndex
