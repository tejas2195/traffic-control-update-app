import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import RootReducer from './Components/Pages/SignUpPage/reducer'

// const store = createStore(RootReducer)
// const initialState = {};
// const middleware = [thunk];
const store = createStore(
    RootReducer,
    compose(
    // applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
