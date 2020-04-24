import { ARTICLELIST } from '../constants/Home'

import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export type ActionhOMEType = ARTICLELIST



export interface HomeActions {
    info: string,
    type: ActionhOMEType
}



function* GetArticleList(action:HomeActions) {
    const {info} = action;
    
    // const rep = yield axios.post('http://192.168.1.2:8000/login/',info)
   
    yield put({ type: ARTICLELIST, a:1 })
}

export function* IsloginActions() {
    yield takeEvery(ARTICLELIST, GetArticleList);
}

// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }


export const LoginAccountActions = (param: HomeActions): HomeActions => {
    return {
        ...param
    }
} 