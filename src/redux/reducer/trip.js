import {
  GET_TRIP_DATA_REQUEST_POST,
  GET_TRIP_DATA_RECEIVE_SUCCESS_POST,
  GET_TRIP_DATA_RECEIVE_ERROR_POST,
  CHANGE_TRIP_KEY,
  CHANGE_TRIP_APPOINTMENT_FIRST_DIELDS,
  CHANGE_TRIP_APPOINTMENT_STEP
} from '../action/trip'

const initialTrip = {
  tripData: [],
  isGettingTripData: false,
  tripKey: '',
  tripAppointmentStep: 0,
  tripAppointmentFirstFields: {
    tripName: {
      value: ''
    },
    tripMonth: {
      value: null
    },
    tripDate: {
      value: ''
    }
  }
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
    case CHANGE_TRIP_APPOINTMENT_FIRST_DIELDS:
      return {...state, tripAppointmentFirstFields: {...state.tripAppointmentFirstFields, ...action.tripAppointmentFirstFieldsChanged}}
    case CHANGE_TRIP_APPOINTMENT_STEP:
      return {...state, tripAppointmentStep: action.tripAppointmentStep};
    default: 
      return state;
  }
}

export default trip;