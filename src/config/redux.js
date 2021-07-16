import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import gifsReducer from '../redux/gifs/reducer'

const rootReducer = combineReducers({
    gifs: gifsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;