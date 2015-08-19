'use strict'
import {combineReducers} from "redux";
import {
    REQUEST_DATA,RECEIVE_DATA
} from "./action";

function datas(state={
    isFetching: false,
    items:[]
},action){
    switch(action.type){
        case REQUEST_DATA:
            return Object.assign({},state,{
                isFetching:true
            })
        case RECEIVE_DATA:
            return Object.assign({},state,{
                isFetching:false,
                items:action.res,
                lastReceiveAt:action.receiveAt
            })
        defalt:
            return state;
    }
}

function dataByCity(state = {},action){
    switch(action.type){
        case RECEIVE_DATA:
        case REQUEST_DATA:
            return Object.assign({},state,{
                [action.city]:datas(state[action.city],action)
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataByCity
});

export default rootReducer;
