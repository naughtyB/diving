import { 
  GET_PRACTICE_DATA_REQUEST_POST,
  GET_PRACTICE_DATA_RECEIVE_SUCCESS_POST,
  GET_PRACTICE_DATA_RECEIVE_ERROR_POST,
  CHANGE_PRACTICE_DISPLAY_INDEX
} from '../action/practice.js';

const initialPractice = {
  data:[],
  isGettingData: true,
  displayIndex: -1
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
    default:
      return state;
  }
}

export default practice;