import moment from "moment";
import { 
  GET_PRACTICE_DATA_REQUEST_POST,
  GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST,
  GET_PRACTICE_DATA_RECEIVE_ERROR_POST,
  CHANGE_PRACTICE_DISPLAY_INDEX,
  CHANGE_PRACTICE_APPOINTMENT_FIRST_DIELDS,
  CHANGE_PRACTICE_APPOINTMENT_STEP
} from '../action/practice.js';



const initialPractice = {
  data:[],
  isGettingData: true,
  displayIndex: -1,
  practiceAppointmentStep: 0,
  practiceAppointmentFirstFields: {
    gymnasium: {
      value: ''
    },
    practiceDate: {
      value: null
    },
    practiceTime: {
      value: ''
    }
  }
}

export const practice = (state = initialPractice , action) => {
  switch(action.type){
    case GET_PRACTICE_DATA_REQUEST_POST:
      return {...state, isGettingData: true};
    case GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingData: false, data: action.practiceData, displayIndex: -1};
    case GET_PRACTICE_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingData: true};
    case CHANGE_PRACTICE_DISPLAY_INDEX:
      return {...state, displayIndex: action.displayIndex};
    case CHANGE_PRACTICE_APPOINTMENT_FIRST_DIELDS:
      return {...state, practiceAppointmentFirstFields: {...state.practiceAppointmentFirstFields, ...action.practiceAppointmentFirstFieldsChanged}}
    case CHANGE_PRACTICE_APPOINTMENT_STEP:
      return {...state, practiceAppointmentStep: action.practiceAppointmentStep};
    default:
      return state;
  }
}

export default practice;