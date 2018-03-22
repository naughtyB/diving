import {
  GET_TRIP_DETAIL_DATA_REQUEST_POST,
  GET_TRIP_DETAIL_DATA_RECEIVE_ERROR_POST,
  GET_TRIP_DETAIL_DATA_RECEIVE_SUCCESS_POST
} from '../action/tripDetail';

const initialTripDetail = {
  tripDetailData: {},
  isGettingTripDetailData: false,
  isGettingTripDetailDataSuccessful: false
}

export const tripDetail = (state = initialTripDetail, action) => {
  switch(action.type){
    case GET_TRIP_DETAIL_DATA_REQUEST_POST:
      return {...state, isGettingTripDetailData: true, isGettingTripDetailDataSuccessful: false};
    case GET_TRIP_DETAIL_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingTripDetailData: false, tripDetailData: action.tripDetailData, isGettingTripDetailDataSuccessful:true};
    case GET_TRIP_DETAIL_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingTripDetailData: false, isGettingTripDetailDataSuccessful: action.isSuccessful};
    default: 
      return state;
  }
}

export default tripDetail;