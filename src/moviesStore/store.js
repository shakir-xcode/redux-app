import { configureStore } from "@reduxjs/toolkit";
import reducer from "./entities";
import logger from "./middleware/logger";
import api from "./middleware/api";
import shortenFavorite from "./middleware/shortenFavorite";

export default configureStore({
    reducer,
    middleware: dm => dm().concat(logger, api, shortenFavorite),
})