import {
  SUBMIT_LOGIN_REQUEST_POST,
  SUBMIT_LOGIN_RECEIVE_SUCCESS_POST,
  SUBMIT_LOGIN_RECEIVE_ERROR_POST,
  CHANGE_USER_MODAL_VISIBLE,
  CHANGE_USER_LOGIN_FIELDS,
  CHANGE_LOGINSTATE,
  CHANGE_USER_REGISTER_FIELDS,
  SUBMIT_REGISTER_REQUEST_POST,
  SUBMIT_REGISTER_RECEIVE_SUCCESS_POST,
  SUBMIT_REGISTER_RECEIVE_ERROR_POST
} from '../action/user.js';

const initialUser = {
  loginFields: {
    mobileNumber: {
      value: ''
    },
    password: {
      value: ''
    }
  },
  registerFields: {
    mobileNumber: {
      value: ''
    },
    password: {
      value: ''
    },
    confirm: {
      value: ''
    },
    username: {
      value: ''
    },
    captcha: {
      value: ''
    }
  },
  modalVisible: false,
  isLogging: false,
  isRegistering: false,
  loginState: false
}

export const user = (state = initialUser, action) => {
  switch(action.type){
    case SUBMIT_LOGIN_REQUEST_POST:
      return {...state, isLogging: true};
    case SUBMIT_LOGIN_RECEIVE_SUCCESS_POST:
      return {...state, isLogging: false, modalVisible: false, loginState: true};
    case SUBMIT_LOGIN_RECEIVE_ERROR_POST:
      return {
        ...state, 
        isLogging: false, 
        modalVisible: true,
        loginFields: {
          ...state.loginFields,
          [action.errorType]: {
            ...state.loginFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }  
      };
    case CHANGE_USER_MODAL_VISIBLE:
      return {...state, modalVisible: action.modalVisible};
    case CHANGE_USER_LOGIN_FIELDS:
      return {...state, loginFields: {...state.loginFields, ...action.loginFieldsChanged}}
    case CHANGE_LOGINSTATE:
      return {...state, loginState: action.loginState};
    case CHANGE_USER_REGISTER_FIELDS:
      return {...state, registerFields: {...state.registerFields, ...action.registerFieldsChanged}};
    case SUBMIT_REGISTER_REQUEST_POST:
      return {...state, isRegistering: true};
    case SUBMIT_REGISTER_RECEIVE_SUCCESS_POST:
      return {...state, isRegistering: false, modalVisible: false, loginState: true};
    case SUBMIT_REGISTER_RECEIVE_ERROR_POST:
      return {
        ...state,
        isRegistering: false,
        modalVisible: true,
        registerFields: {
          ...state.registerFields,
          [action.errorType]: {
            ...state.registerFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }
      }
    default:
      return state;
  }
}

export default user;