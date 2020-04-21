import { LoginActions} from '../actions/Login'
import { ISLOGINPSD , ISLOGINACCOUNT} from '../constants/Login'
import {ActionLoginType} from '../actions/Login'

export interface LoginSatteType {
    username?:String,
    password?:String,
}

const defaultState:LoginSatteType={
    username:'',
    password:'',
}

export default function(state= defaultState,actions:LoginActions):object{
    let newState = state;
    switch(actions.type){
        // case ISLOGIN:
        //     return {...state}
        case ISLOGINACCOUNT:
            newState.username = actions.info;
            return newState
        case ISLOGINPSD:
            newState.password = actions.info;
            return newState
            
        default: return state
    }
    
}