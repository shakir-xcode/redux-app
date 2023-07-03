import { combineReducers } from "redux";
import apiReducer from "./movieSlice";
import favoriteReducer from "./favoriteSlice";


export default combineReducers({
    movies: apiReducer,
    favorites: favoriteReducer,
})
