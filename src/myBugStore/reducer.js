import { combineReducers } from "redux";
import entitiesReducer from './entites';


export default combineReducers({
    entites: entitiesReducer,
})