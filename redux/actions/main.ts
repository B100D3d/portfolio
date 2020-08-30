import { SET_MOBILE } from "@redux/actionTypes"
import { Mobile } from "@redux/types"

export const setMobile = (isMobile: boolean): Mobile => ({
    type: SET_MOBILE,
    isMobile,
})
