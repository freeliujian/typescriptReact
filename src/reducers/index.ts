import * as redux from 'redux'
import Home from './Home'
import Login from './Login'
import Article from './Article'

export const Reducers = redux.combineReducers({
    Home,
    Login,
    Article
})


