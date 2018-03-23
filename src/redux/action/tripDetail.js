import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const GET_TRIP_DETAIL_DATA_REQUEST_POST = 'GET_TRIP_DETAIL_DATA_REQUEST_POST';

export const GET_TRIP_DETAIL_DATA_RECEIVE_SUCCESS_POST = 'GET_TRIP_DETAIL_DATA_RECEIVE_SUCCESS_POST';

export const GET_TRIP_DETAIL_DATA_RECEIVE_ERROR_POST = 'GET_TRIP_DETAIL_DATA_RECEIVE_ERROR_POST';

export const doGetTripDetailDataRequestPost = () => {
  return {
    type: GET_TRIP_DETAIL_DATA_REQUEST_POST
  }
}

export const doGetTripDetailDataReceiveSuccessPost = (tripDetailData) => {
  return {
    type: GET_TRIP_DETAIL_DATA_RECEIVE_SUCCESS_POST,
    tripDetailData
  }
}

export const doGetTripDetailDataReceiveErrorPost = (isSuccessful) => {
  return {
    type: GET_TRIP_DETAIL_DATA_RECEIVE_ERROR_POST,
    isSuccessful
  }
}

export const doGetTripDetailData = (tripId, errCallback) => (dispatch) => {
  dispatch(doGetTripDetailDataRequestPost());
  return fetch('/server/trip/getTripDetailData', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'tripId=' + encodeURIComponent(tripId)
  }).then(res => {
    return res.json();
  }).then(res => {
    if(res.err){
      dispatch(doGetTripDetailDataReceiveErrorPost(res.isSuccessful))
      if(res.isSuccessful){
        errCallback && errCallback();
      }
    }
    else{
      dispatch(doGetTripDetailDataReceiveSuccessPost(res.tripDetailData))
    }
  })
}