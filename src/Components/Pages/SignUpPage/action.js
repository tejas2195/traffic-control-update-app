import { ADD_ARTICLE, LOGOUT } from '../../Common/constant';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
  };

  export function removeUser() {
    return { type: LOGOUT };
  };