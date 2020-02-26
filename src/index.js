import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import RootReducer from './Components/Pages/SignUpPage/reducer'

const store = createStore(
    RootReducer,
    compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
