import { ADD_USER, LOGOUT } from '../../Common/constant';

export function addArticle(payload) {
    return { type: ADD_USER, payload };
  };

  export function removeUser() {
    return { type: LOGOUT };
  };