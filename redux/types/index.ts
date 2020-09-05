import {
    MAX_INDEX,
    NEXT_BLOCK,
    PAGE_LOADED,
    PREV_BLOCK,
    SET_MOBILE,
    TO_BLOCK,
} from "@redux/actionTypes"

export interface MainState {
    isMobile: boolean
    pageLoad: boolean
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

export interface Mobile {
    type: typeof SET_MOBILE
    isMobile: boolean
}

export interface PageLoaded {
    type: typeof PAGE_LOADED
}

export type MainActionTypes = Mobile | PageLoaded
