import * as actionsTypes from '../constants/actionsTypes'
import jsonData from '../data/sidebar.json'

/*
export function loadData() {
    return function (dispatch) {
        console.log(jsonData)
        fetch('../data/sidebar.json').then(function(response) {
             if (!response.ok) {
                throw Error(response.statusText);
            }
            response.json().then(function(data) {
                dispatch(loadDataInner(data))
            });

        }).catch(function(error) {
           // dispatch(openMsgDialog(BODY_NOT_OKAY, TITLE_NOT_OKAY))
            console.log('error', error)
        });
    }
}
*/


export function loadData() {
    return{
        type: actionsTypes.LOAD_DATA,
        reports: jsonData
    }
}
export function updateSearchValue(value) {
    return{
        type: actionsTypes.UPDATE_SEARCH_VALUE,
        value: value
    }
}
export function updateSidebarView() {
    return{
        type: actionsTypes.UPDATE_SIDEBAR_VIEW
    }
}
