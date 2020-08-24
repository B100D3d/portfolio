import { createStore, combineReducers, compose } from "redux"
import { scroll } from "@redux/reducers/scroll"

const rootReducer = combineReducers({
    scroll,
})

const composeEnhancers =
    (typeof window !== "undefined" &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose

const store = createStore(rootReducer, composeEnhancers)

export default store

export type Stores = ReturnType<typeof rootReducer>
