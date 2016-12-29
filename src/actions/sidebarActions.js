import * as actionsTypes from '../constants/actionsTypes'
import jsonData from '../data/sidebar.json'


/**
 * http get to fetch the sidebar.json
 * **/
/*
import axios from 'axios'
export function loadData() {
    return function (dispatch) {
        axios.get('/user', {
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            dispatch(loadDataInner(response));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
export function loadDataInner() {
    return{
        type: actionsTypes.LOAD_DATA,
        reports: jsonData
    }
}
*/
//fetch local data
export function loadData() {
    return{
        type: actionsTypes.LOAD_DATA,
        reports: jsonData
    }
}
//update search value
export function updateSearchValue(value) {
    return{
        type: actionsTypes.UPDATE_SEARCH_VALUE,
        value: value
    }
}
// update the view of sidebar => visible ar hidden
export function updateSidebarView() {
    return{
        type: actionsTypes.UPDATE_SIDEBAR_VIEW
    }
}
