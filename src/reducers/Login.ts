import { LoginActions} from '../actions/Login'
import { ISLOGIN } from '../constants/Login'
import { Switch } from 'antd'

export interface LoginSatteType {
    username:String,
    password:String,
}

const defaultState:LoginSatteType={
    username:'',
    password:'',
}

export default function(state= defaultState,actions:LoginActions):object{
    switch(actions.type){
        case ISLOGIN:
            return {...state}

        default: return state
    }
}