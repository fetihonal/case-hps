import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import thunkMiddleware from 'redux-thunk'
// import logger from 'redux-logger'

// Import custom components
import reducers from '../reducers/index';


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        return undefined
    }
}

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();

    saveToLocalStorage(state);
});


export default store;