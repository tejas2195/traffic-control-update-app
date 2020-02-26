import { ADD_USER, LOGOUT } from '../../Common/constant';

const initialState = {
  user: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: state.user.concat(action.payload)
            }
        case LOGOUT:
            return {
                ...state,
                user: []
            }
    }
  return state;
}

export default rootReducer;