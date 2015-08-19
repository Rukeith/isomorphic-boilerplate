'use strict'
import reqwest from "reqwest";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const REQUEST_DATA = "REQUEST_DATA";

function requestData(city){
    return {
        type:REQUEST_DATA,
        city
    }
}

function receiveData(city,res){
    return {
        type:RECEIVE_DATA,
        res
        receiveAt:Date.now()
    }
}

export function fetchData(city){
    return (dispatch,getState)=>{
        dispatch(requestData(city))
        return reqwest({
            url:"http://apis.baidu.com/apistore/weatherservice/citylist",
            headers:{
                apikey:"xxxx"
            },
            type:"json",
            method:"GET"
        }).then(res=>dispatch(receiveData(city,res)));
    }
}