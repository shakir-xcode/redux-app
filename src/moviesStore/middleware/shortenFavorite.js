import { beginFavortie } from "../appActions";
import { addFavorite } from "../favoriteSlice";


const shortenFavorite = ({ dispatch }) => next => action => {
    if (action.type !== beginFavortie.type) return next(action)

    next(action)
    const movie = action.payload;
    const favMovie = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
    }
    dispatch(addFavorite(favMovie))
}

export default shortenFavorite;

