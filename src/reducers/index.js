import {combineReducers} from 'redux';
import apps from './app'
import student from './auth'
import clerk from './clerk'

export default combineReducers({
    apps,student , clerk
})
