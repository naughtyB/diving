import fetch from "isomorphic-fetch";
import Promise from "promise-polyfill";
//兼容性处理
if(!window.Promise){
    window.Promise=Promise
}

export const CHANGE_USER_MODAL_VISIBLE = 'CHANGE_USER_MODAL_VISIBLE';

export const doChangeUserModalVisible = (modalVisible) => {
  return {
    type: CHANGE_USER_MODAL_VISIBLE,
    modalVisible
  }
}