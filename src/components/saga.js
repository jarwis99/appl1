import {takeEvery,put,call} from 'redux-saga/effects'
import api from './api.js'
import {postWeather} from './actions/postAction.js'

function* fcall(action){
    console.log(action)
    const res=yield call(api,action.payload)
    yield console.log(res)
    yield put(postWeather(res.current))
    
}

export default function* saga(){
    yield takeEvery('CALL',fcall)
}