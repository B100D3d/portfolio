import { MAX_INDEX, NEXT_BLOCK, PREV_BLOCK, TO_BLOCK } from "@redux/actionTypes"
import { ScrollActionTypes, ScrollState } from "@redux/types"

const initialState: ScrollState = {
    currentBlockIndex: 0,
    maxBlockIndex: 1,
}

const scroll = (state = initialState, action: ScrollActionTypes) => {
    switch (action.type) {
        case NEXT_BLOCK:
            const nextIndex =
                state.currentBlockIndex !== state.maxBlockIndex
                    ? state.currentBlockIndex + 1
                    : state.currentBlockIndex
            return { ...state, currentBlockIndex: nextIndex }
        case PREV_BLOCK:
            const prevIndex =
                state.currentBlockIndex !== 0
                    ? state.currentBlockIndex - 1
                    : state.currentBlockIndex
            return { ...state, currentBlockIndex: prevIndex }
        case TO_BLOCK:
            return { ...state, currentBlockIndex: action.blockIndex }
        case MAX_INDEX:
            return { ...state, maxBlockIndex: action.maxIndex }
        default:
            return state
    }
}

export default scroll
