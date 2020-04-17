import {ISLOGIN} from '../constants/Login'
import {LoginSatteType} from '../reducers/Login'

export type LoginType = typeof ISLOGIN;

export interface LoginActions  {
    info:LoginSatteType,
    type:LoginType
}


export const LoginActions = (param:object)=>{
    return {
        type:ISLOGIN,
        param
    }
} 