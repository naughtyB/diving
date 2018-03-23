import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_TRIP_DATA_REQUEST_POST = 'GET_TRIP_DATA_REQUEST_POST';

export const GET_TRIP_DATA_RECEIVE_SUCCESS_POST = 'GET_TRIP_DATA_RECEIVE_SUCCESS_POST';

export const GET_TRIP_DATA_RECEIVE_ERROR_POST = 'GET_TRIP_DATA_RECEIVE_ERROR_POST';

export const CHANGE_TRIP_KEY = 'CHANGE_TRIP_KEY';

export const doGetTripDataRequestPost = () => {
  return {
    type: GET_TRIP_DATA_REQUEST_POST
  }
} 

export const doGetTripDataReceiveSuccessPost = (tripData) => {
  return {
    type: GET_TRIP_DATA_RECEIVE_SUCCESS_POST,
    tripData
  }
}

export const doGetTripDataReceiveErrorPost = () => {
  return {
    type: GET_TRIP_DATA_RECEIVE_ERROR_POST
  }
}

export const doGetTripData = () => (dispatch) => {
  dispatch(doGetTripDataRequestPost());
  return fetch('/server/trip/getTripData', {
    method: 'get',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.err){
      dispatch(doGetTripDataReceiveErrorPost())
    }
    else{
      dispatch(doGetTripDataReceiveSuccessPost(res.tripData));
    }
  })
}

export const doChangeTripKey = (tripKey) => {
  return {
    type: CHANGE_TRIP_KEY,
    tripKey
  }
}