import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import App from './components/App';

const middleware = [
    thunk,
];

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
  ));

// const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// reportWebVitals(console.log);
