import {
  GET_TRIP_DATA_REQUEST_POST,
  GET_TRIP_DATA_RECEIVE_SUCCESS_POST,
  GET_TRIP_DATA_RECEIVE_ERROR_POST,
  CHANGE_TRIP_KEY
} from '../action/trip'

const initialTrip = {
  tripData: [],
  isGettingTripData: false,
  tripKey: ''
}

export const trip = (state = initialTrip, action) => {
  switch(action.type){
    case GET_TRIP_DATA_REQUEST_POST:
      return {...state, isGettingTripData: true};
    case GET_TRIP_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingTripData: false, tripData: action.tripData, tripKey: action.tripData[0]['areaName']};
    case GET_TRIP_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingTripData: false};
    case CHANGE_TRIP_KEY:
      return {...state, tripKey: action.tripKey};
    default: 
      return state;
  }
}

export default trip;