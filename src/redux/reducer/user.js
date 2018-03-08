import {
  SUBMIT_LOGIN_REQUEST_POST,
  SUBMIT_LOGIN_RECEIVE_SUCCESS_POST,
  SUBMIT_LOGIN_RECEIVE_ERROR_POST,
  CHANGE_USER_LOGIN_MODAL_VISIBLE,
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
  SUBMIT_USER_DATA_RECEIVE_OTHER_ERROR_POST,
  SUBMIT_USER_DATA_RECEIVE_LOGIN_ERROR_POST,
  GET_USER_DATA_FIELDS_REQUEST_POST,
  GET_USER_DATA_FIELDS_RECEIVE_SUCCESS_POST,
  GET_USER_DATA_FIELDS_RECEIVE_OTHER_ERROR_POST,
  GET_USER_DATA_FIELDS_RECEIVE_LOGIN_ERROR_POST,
  GET_USER_PERSON_REQUEST_POST,
  GET_USER_PERSON_RECEIVE_SUCCESS_POST,
  GET_USER_PERSON_RECEIVE_LOGIN_ERROR_POST,
  GET_USER_PERSON_RECEIVE_OTHER_ERROR_POST,
  CHANGE_USER_PERSON_MODAL_VISIBLE,
  CHANGE_USER_PERSON_MODAL_FIELDS,
  SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST,
  SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_SUCCESS_POST,
  SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST,
  SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST,
  DELETE_USER_PERSON_REQUEST_POST,
  DELETE_USER_PERSON_RECEIVE_SUCCESS_POST,
  DELETE_USER_PERSON_RECEIVE_OTHER_ERROR_POST,
  DELETE_USER_PERSON_RECEIVE_LOGIN_ERROR_POST
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
  userDataFields: {
    username: {
      value: ''
    },
    sex: {
      value: 'secret'
    }
  },
  personModalFields: {
    name: {
      value: ''
    },
    mobileNumber: {
      value: ''
    }
  },
  person: [],
  currentPersonId: '',
  loginModalVisible: false,
  isLogging: false,
  isRegistering: false,
  isResettingPassword: false,
  isGettingUserDataFields: false,
  isGettingUserDataFieldsSuccessful: false,
  isGettingUserPerson: false,
  isGettingUserPersonSuccessful: false,
  isSubmittingUserData: false,
  loginState: false,
  personModalVisible: false,
  personModalType: 'add',
  SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST,
  isSubmittingPersonModalFields: false,
  isDeletingUserPerson: false
}

export const user = (state = initialUser, action) => {
  switch(action.type){
    case SUBMIT_LOGIN_REQUEST_POST:
      return {...state, isLogging: true};
    case SUBMIT_LOGIN_RECEIVE_SUCCESS_POST:
      return {...state, isLogging: false, loginModalVisible: false, loginState: true};
    case SUBMIT_LOGIN_RECEIVE_ERROR_POST:
      return {
        ...state, 
        isLogging: false, 
        loginModalVisible: true,
        loginFields: {
          ...state.loginFields,
          [action.errorType]: {
            ...state.loginFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }  
      };
    case CHANGE_USER_LOGIN_MODAL_VISIBLE:
      return {...state, loginModalVisible: action.loginModalVisible};
    case CHANGE_USER_LOGIN_FIELDS:
      return {...state, loginFields: {...state.loginFields, ...action.loginFieldsChanged}}
    case CHANGE_LOGINSTATE:
      return {...state, loginState: action.loginState};
    case CHANGE_USER_REGISTER_FIELDS:
      return {...state, registerFields: {...state.registerFields, ...action.registerFieldsChanged}};
    case SUBMIT_REGISTER_REQUEST_POST:
      return {...state, isRegistering: true};
    case SUBMIT_REGISTER_RECEIVE_SUCCESS_POST:
      return {...state, isRegistering: false, loginModalVisible: false, loginState: true};
    case SUBMIT_REGISTER_RECEIVE_ERROR_POST:
      return {
        ...state,
        isRegistering: false,
        loginModalVisible: true,
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
      return {...state, isResettingPassword: false, loginModalVisible: false, loginState:true};
    case SUBMIT_RESET_PASSWORD_RECEIVE_ERROR_POST:
      return {
        ...state,
        isResettingPassword: false,
        loginModalVisible: true,
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
    case SUBMIT_USER_DATA_RECEIVE_SUCCESS_POST:
      return {
        ...state, 
        isSubmittingUserData: false,
        userDataFields: {
          username: {
            value: action.userDataFields.username
          },
          sex: {
            value: action.userDataFields.sex
          }
        }
      };
    case SUBMIT_USER_DATA_RECEIVE_OTHER_ERROR_POST:
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
    case SUBMIT_USER_DATA_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isSubmittingUserData: false, loginState: false};
    case GET_USER_DATA_FIELDS_REQUEST_POST:
      return {...state, isGettingUserDataFields: true, isGettingUserDataFieldsSuccessful: false};
    case GET_USER_DATA_FIELDS_RECEIVE_SUCCESS_POST:
      return {
        ...state, 
        isGettingUserDataFields: false, 
        isGettingUserDataFieldsSuccessful: true,
        userDataFields: {
          username: {
            value: action.userDataFields.username
          },
          sex: {
            value: action.userDataFields.sex || 'secret'
          }
        }
      };
    case GET_USER_DATA_FIELDS_RECEIVE_OTHER_ERROR_POST:
      return {...state, isGettingUserDataFields: false, isGettingUserDataFieldsSuccessful: false};
    case GET_USER_DATA_FIELDS_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isGettingUserDataFields: false, loginState: false, isGettingUserDataFieldsSuccessful: false};
    case GET_USER_PERSON_REQUEST_POST:
      return {...state, isGettingUserPerson: true, isGettingUserPersonSuccessful: false};
    case GET_USER_PERSON_RECEIVE_SUCCESS_POST:
      return {...state, isGettingUserPerson: false, isGettingUserPersonSuccessful: true, person: action.person};
    case GET_USER_PERSON_RECEIVE_OTHER_ERROR_POST:
      return {...state, isGettingUserPerson: false, isGettingUserPersonSuccessful: false};
    case GET_USER_PERSON_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isGettingUserPerson: false, isGettingUserPersonSuccessful: false, loginState: false};
    case CHANGE_USER_PERSON_MODAL_VISIBLE:
      return {
        ...state, 
        currentPersonId: action.currentPersonId,
        personModalVisible: action.personModalVisible, 
        personModalType: action.personModalType,
        personModalFields: {
          name: {
            value: action.personModalType === 'add' ? '' : action.personModalType === 'modify' ?  action.name : ''
          },
          mobileNumber: {
            value: action.personModalType === 'add' ? '' : action.personModalType === 'modify' ?  action.mobileNumber : ''
          }
        }
      };
    case CHANGE_USER_PERSON_MODAL_FIELDS:
      return {...state, personModalFields: {...state.personModalFields, ...action.personModalFieldsChanged}};
    case SUBMIT_USER_PERSON_MODAL_FIELDS_REQUEST_POST:
      return {...state, isSubmittingPersonModalFields: true};
    case SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_SUCCESS_POST:
      return {...state, person: action.person, personModalVisible: false, isSubmittingPersonModalFields: false};
    case SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isSubmittingPersonModalFields: false, loginState: false, personModalVisible: false};
    case SUBMIT_USER_PERSON_MODAL_FIELDS_RECEIVE_OTHER_ERROR_POST:
      return {
        ...state, 
        isSubmittingPersonModalFields: false,
        personModalFields: {
          ...state.personModalFields,
          [action.errorType]: {
            ...state.userDataFields[action.errorType],
            errors: [{field: action.errorType, message: action.error}]
          }
        }
      }
    case DELETE_USER_PERSON_REQUEST_POST:
      return {...state, isDeletingUserPerson: true};
    case DELETE_USER_PERSON_RECEIVE_SUCCESS_POST:
      return {...state, isDeletingUserPerson: false, person: action.person};
    case DELETE_USER_PERSON_RECEIVE_OTHER_ERROR_POST:
      return {...state, isDeletingUserPerson: false};
    case DELETE_USER_PERSON_RECEIVE_LOGIN_ERROR_POST:
      return {...state, isDeletingUserPerson: false, loginState: false};
    default:
      return state;
  }
}

export default user;