import { 
  GET_HOMEPAGE_DATA_REQUEST_POST,
  GET_HOMEPAGE_DATA_RECEIVE_SUCCESS_POST,
  GET_HOMEPAGE_DATA_RECEIVE_ERROR_POST
} from '../action/homepage.js';

const initialHomepage = {
  data:{banner: ['/ban1.jpg']},
  isGettingData: false
}

export const homepage = (state = initialHomepage , action) => {
  switch(action.type){
    case GET_HOMEPAGE_DATA_REQUEST_POST:
      return {...state, isGettingData: true};
    case GET_HOMEPAGE_DATA_RECEIVE_SUCCESS_POST:
      return {...state, isGettingData: false, data: action.homepageData};
    case GET_HOMEPAGE_DATA_RECEIVE_ERROR_POST:
      return {...state, isGettingData: true};
    default:
      return state;
  }
}

export default homepage;