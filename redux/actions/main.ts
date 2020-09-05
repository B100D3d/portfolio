import { PAGE_LOADED, SET_MOBILE } from "@redux/actionTypes"
import { Mobile, PageLoaded } from "@redux/types"

export const setMobile = (isMobile: boolean): Mobile => ({
    type: SET_MOBILE,
    isMobile,
})

export const pageLoaded = (): PageLoaded => ({
    type: PAGE_LOADED,
})
