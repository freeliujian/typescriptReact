// import {createStore,compose,applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga'



import { createStore, applyMiddleware, compose } from 'redux';
import {Reducers} from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/index'

// 引入中间件
const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const enhancer = composeEnhancers(
   applyMiddleware(sagaMiddleware)
);



const store  =  createStore( Reducers, enhancer )

// 启动saga
sagaMiddleware.run(rootSaga)

export default store
