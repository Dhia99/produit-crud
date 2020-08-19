import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../Reducers";


export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
    )
)