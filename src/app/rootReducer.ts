import {combineReducers} from 'redux'
import {infoReducer} from './appReducer/reducer'

export const rootReducer = combineReducers({
    info: infoReducer
})