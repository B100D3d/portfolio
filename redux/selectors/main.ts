import { Stores } from "@redux/store"
import { createSelector } from "reselect"

export const mainStore = (state: Stores) => state.main

export const isMobileSelector = createSelector(
    [mainStore],
    (main) => main.isMobile
)

export const pageLoadedSelector = createSelector(
    [mainStore],
    (main) => main.pageLoad
)
