import { LoginActions} from '../actions/Login'
import { ARTICLELIST} from '../constants/Home'
import {ActionLoginType} from '../actions/Login'

export interface ArticlePage {
   
    title:string,
    article:string,
    good:number
}

const defaultState={
    title:'使用Ts和React开发项目，搭建环境',
    article:'111111111111111111111',
    good:0
}

export default function(state= defaultState,actions: { type: ARTICLELIST; info:ArticlePage; }):object{
    let newState = state;
    switch(actions.type){
        case ARTICLELIST:
            newState = actions.info;
            return newState
        
        default: return state
    }
    
}