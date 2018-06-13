// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// import registerServiceWorker from './registerServiceWorker';
// const store = createStore(rootReducer)
// ReactDOM.render(
// <Provider store={store}>
// <App />
// </Provider>, document.getElementById('root'));
// registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import data from './data.json';
// import App from './App';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers,{users:data})}>
//     <App />
//   </Provider>
//   , document.getElementById('root'));


import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as userActions from './actions/actions';
 import App from './App';
import configureStore from './store/configureStore';

const store = configureStore({isAll:false,users:[]});
console.log(store);
store.dispatch(userActions.fetchUsers());
render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);