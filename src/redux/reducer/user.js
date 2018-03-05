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
  SUBMIT_REGISTER_RECEIVE_ERROR_POST,
  CHANGE_USER_RESET_PASSWORD_FIELDS,
  SUBMIT_RESET_PASSWORD_REQUEST_POST,
  SUBMIT_RESET_PASSWORD_RECEIVE_SUCCESS_POST,
  SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST,
  CHANGE_USER_DATA_FIELDS,
  SUBMIT_USER_DATA_REQUEST_POST,
  SUBMIT_USER_DATA_RECEIVE_SUCCESS_POST,
  SUBMIT_USER_DATA_RECEIVE_ERROR_POST,
  GET_USER_DATA
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
  resetPasswordFields: {
    mobileNumber:{
      value: ''
    },
    password: {
      value: ''
    },
    confirm: {
      value: ''
    },
    captcha: {
      value: ''
    }
  },
  userDataFields:{
    username: {
      value: '你牛逼'
    },
    sex: {
      value: 'secret'
    }
  },
  userData: {},
  modalVisible: false,
  isLogging: false,
  isRegistering: false,
  isResettingPassword: false,
  isSubmittingUserData: false,
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
      };
    case CHANGE_USER_RESET_PASSWORD_FIELDS:
      return {...state, resetPasswordFields: {...state.resetPasswordFields, ...action.resetPasswordFieldsChanged}};
    case SUBMIT_RESET_PASSWORD_REQUEST_POST:
      return {...state, isResettingPassword: true};
    case SUBMIT_RESET_PASSWORD_RECEIVE_SUCCESS_POST:
      return {...state, isResettingPassword: false, modalVisible: false, loginState:true};
    case SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST:
      return {
        ...state,
        isResettingPassword: false,
        modalVisible: true,
        resetPasswordFields: {
          ...state.resetPasswordFields,
          [action.errorType]: {
            ...state.resetPasswordFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }
      }
    case CHANGE_USER_DATA_FIELDS:
      return {...state, userDataFields: {...state.userDataFields, ...action.userDataFieldsChanged}};
    case SUBMIT_USER_DATA_REQUEST_POST:
      return {...state, isSubmittingUserData: true};
    case SUBMIT_REGISTER_RECEIVE_SUCCESS_POST:
      return {...state, isSubmittingUserData: false};
    case SUBMIT_USER_DATA_RECEIVE_ERROR_POST:
      return {
        ...state, 
        isSubmittingUserData: false,
        userDataFields: {
          ...state.userDataFields,
          [action.errorType]: {
            ...state.userDataFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }
      }
    default:
      return state;
  }
}

export default user;