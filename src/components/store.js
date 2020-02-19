import {createStore, applyMiddleware,compose} from 'redux';
import reducer from './reducers/index.js'
import createSagaMiddleware from 'redux-saga'
import saga from './saga.js'
const initialState={}
const sagaMiddleware = createSagaMiddleware()
const  store = createStore(
    reducer,
    initialState,
    compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && 
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
sagaMiddleware.run(saga)
export default store;