import { ARTICLEDETAIL } from '../constants/Article'

import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export type ActionhOMEType = ARTICLEDETAIL



export interface HomeActions {
    info: string,
    type: ActionhOMEType
}



function* GetArticleDeatil(action:HomeActions) {
    const {info} = action;
    
    // const rep = yield axios.post('http://192.168.1.2:8000/login/',info)
   
    yield put({ type: ARTICLEDETAIL, a:1 })
}

export function* IsloginActions() {
    yield takeEvery(ARTICLEDETAIL, GetArticleDeatil);
}



export const LoginAccountActions = (param: HomeActions): HomeActions => {
    return {
        ...param
    }
} 