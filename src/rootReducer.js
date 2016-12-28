import { combineReducers } from 'redux'
import sidebar from './reducers/sidebarReducer'


const rootReducer = combineReducers({
    sidebar,
})

export default rootReducer