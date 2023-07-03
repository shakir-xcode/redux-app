import store from "./moviesStore/store";
import { loadMovies } from "./moviesStore/movieSlice";


store.dispatch(loadMovies())

