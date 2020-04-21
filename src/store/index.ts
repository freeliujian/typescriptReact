import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import {Reducers} from '../reducers'

// const composeEnhancers =  compose;

const ReduxSaga = createSagaMiddleware();
const store = createStore(
    Reducers,
    applyMiddleware(ReduxSaga)
);

export default store