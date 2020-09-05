import { MainActionTypes, MainState } from "@redux/types"
import { PAGE_LOADED, SET_MOBILE } from "@redux/actionTypes"

const initialState: MainState = {
    isMobile: false,
    pageLoad: false,
}

const main = (state = initialState, action: MainActionTypes) => {
    switch (action.type) {
        case SET_MOBILE:
            return { ...state, isMobile: action.isMobile }
        case PAGE_LOADED:
            return { ...state, pageLoad: true }
        default:
            return state
    }
}

export default main
