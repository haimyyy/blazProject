import { combineReducers } from 'redux'
import * as actionsTypes from '../constants/actionsTypes'
import _ from 'lodash'

let initialState = {
    selectedList: 0,
    selectedListSum:0,
    betNumber: 0,
}

const bet = (state = initialState, action = undefined) => {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case actionsTypes.UPDATE_SELECTED_LIST:
            newState.selectedList = action.listNumber
            newState.selectedListSum = action.sum
            return newState
        case actionsTypes.UPDATE_DUAL_NUMBER:
            newState.betNumber = action.number
            return newState
        default:
            return newState
    }
}

export default bet