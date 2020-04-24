import { LoginActions} from '../actions/Login'
import { ARTICLELIST} from '../constants/Home'
import {ActionLoginType} from '../actions/Login'

export interface HomeSatteType {
    pageSize:number,
    pageIndex:number,
}

const defaultState={
    pageSize:10,
    pageIndex:1,
}

export default function(state= defaultState,actions: { type: ARTICLELIST; info:HomeSatteType; }):object{
    let newState = state;
    switch(actions.type){
        case ARTICLELIST:
            newState = actions.info;
            return newState
        
        default: return state
    }
    
}