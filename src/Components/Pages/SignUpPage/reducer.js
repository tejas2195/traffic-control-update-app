import { ADD_ARTICLE, LOGOUT } from '../../Common/constant';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: state.articles.concat(action.payload)
            }
        case LOGOUT:
            return {
                ...state,
                articles: []
            }
    }
//   if (action.type === ADD_ARTICLE) {
//       return {
//         ...state,
//         articles: state.articles.concat(action.payload)
//       }
//     //   return Object.assign({}, state, {
//     //       articles: state.articles.concat(action.payload)
//     //   })
//   }
  return state;
}

export default rootReducer;