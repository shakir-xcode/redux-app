import store from "./moviesStore/store";
import { loadMovies, addMovie, getMovie } from "./moviesStore/movieSlice";
import { removeFavorite } from "./moviesStore/favoriteSlice";
import { beginFavortie } from "./moviesStore/appActions";



// store.dispatch(addMovie({
//     id: 1,
//     name: 'new movie',
// }))
store.dispatch(loadMovies())


setTimeout(() => {
    store.dispatch(loadMovies())
}, 4000)



// const state = store.getState();

// store.dispatch(addFavorite(state.movies.list[0]))
// store.dispatch(addFavorite({
//     id: 2,
//     name: 'some movie',
// }))

// store.dispatch(removeFavorite({ id: 1 }))
