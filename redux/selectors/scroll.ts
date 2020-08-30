import { createSelector } from "reselect"
import { ScrollState } from "@redux/types"
import { Stores } from "@redux/store"

export const getBlockIndexes = (state: Stores): ScrollState => state.scroll

export const currentBlockIndexSelector = createSelector(
    [getBlockIndexes],
    (scroll) => scroll.currentBlockIndex
)
