import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import App from './components/App';

// dev store with redux devtools
// const middleware = [thunk];
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

// prod store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
