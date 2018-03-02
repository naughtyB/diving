import {
  CHANGE_USER_MODAL_VISIBLE
} from '../action/userModal.js';

const initialUserModal = {
  modalVisible: false
}

export const userModal = (state = initialUserModal, action) => {
  switch(action.type){
    case CHANGE_USER_MODAL_VISIBLE:
      return {...state, modalVisible: action.modalVisible};
    default:
      return state;
  }
}

export default userModal;
