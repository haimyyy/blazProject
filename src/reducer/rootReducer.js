import { combineReducers } from 'redux'
import * as actionsTypes from '../constants/actionsTypes'

let initialState = {
    data: {}
}
const sidebarReducer = (state = initialState, action = undefined) => {
    let newState = state
    switch (action.type) {
        case actionsTypes.LOAD_DATA:
            newState.data = action.data
        default:
            return newState
    }
}

const rootReducer = combineReducers({
    sidebarReducer,
})

export default rootReducer