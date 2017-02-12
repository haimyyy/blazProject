import * as actionsTypes from '../constants/actionsTypes'
import jsonData from '../data/sidebar.json'


/**
 * http get to fetch the sidebar.json
 * **/

// update the view of sidebar => visible ar hidden
export function updateSelectedList(listNumber, sum) {
    return{
        type: actionsTypes.UPDATE_SELECTED_LIST,
        listNumber: listNumber,
        sum: sum
    }
}
export function updateDualNumber(number) {
    return{
        type: actionsTypes.UPDATE_DUAL_NUMBER,
        number: number,
    }
}
