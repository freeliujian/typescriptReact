import { ISLOGINPSD, ISLOGINACCOUNT, ISLOGIN } from '../constants/Login'
import {LoginSatteType} from '../reducers/Login'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export type ActionLoginType = ISLOGINPSD | ISLOGINACCOUNT | ISLOGIN |string

export interface LoginActions {
    info: string,
    type: ActionLoginType
}

export interface IsLoginActions{
    info: LoginSatteType,
    type: ActionLoginType
}

function* Islogin(action:LoginActions) {
    const {info} = action;
    
    const rep = yield axios.post('http://192.168.1.2:8000/login/',info)
    console.log(rep)
    yield put({ type: ISLOGIN, rep })
}

export function* IsloginActions() {
    

    yield takeEvery(ISLOGIN, Islogin);
}

// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }


export const LoginAccountActions = (param: LoginActions): LoginActions => {
    return {
        ...param
    }
} 