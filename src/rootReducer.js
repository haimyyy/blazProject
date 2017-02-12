import { combineReducers } from 'redux'
import sidebar from './reducers/sidebarReducer'
import bet from './reducers/betReducer'


const rootReducer = combineReducers({
    sidebar,
    bet
})

export default rootReducer