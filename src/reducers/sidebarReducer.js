import { combineReducers } from 'redux'
import * as actionsTypes from '../constants/actionsTypes'
import _ from 'lodash'
let initialState = {
    reports: [],
    searchValue: '',
    isDisplayed: false
}
const sidebar = (state = initialState, action = undefined) => {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case actionsTypes.LOAD_DATA:
            newState.reports = action.reports
            return newState
        case actionsTypes.UPDATE_SEARCH_VALUE:
            newState.searchValue = action.value
            return newState
        case actionsTypes.UPDATE_SIDEBAR_VIEW:
            newState.isDisplayed = !newState.isDisplayed
            return newState
        default:
            return newState
    }
}

export default sidebar