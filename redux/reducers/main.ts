import { MainActionTypes, MainState } from "@redux/types"

const initialState: MainState = {
    isMobile: false,
}

const main = (state = initialState, action: MainActionTypes) => {
    switch (action.type) {
        case "SET_MOBILE":
            return { ...state, isMobile: action.isMobile }
        default:
            return state
    }
}

export default main
