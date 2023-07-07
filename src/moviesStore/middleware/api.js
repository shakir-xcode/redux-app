import { apiCallBegan, apiCallSuccess, apiCallFailed, beginFavortie } from "../appActions";
import request from "../../moviesConfig";
import axios from "axios";


const api = ({ dispatch, getState }) => next => action => {
    if (action.type !== apiCallBegan.type) return next(action);

    next(action)
    // do api request
    const { url, onSuccess, onEnd, onStart, onError, setTimestamp } = action.payload;

    if (onStart)
        dispatch({ type: onStart });

    // TODO:  multiple urls are to be fetched      

    function getPopularMovies() {
        return axios.get(request.requestPopular);
    }

    function getTopRatedMovies() {
        return axios.get(request.requestTopRated);
    }

    function getUpcomingMovies() {
        return axios.get(request.requestUpcoming);
    }

    Promise.all([getPopularMovies(), getTopRatedMovies(), getUpcomingMovies()])
        .then(allMovies => {
            // General
            // dispatch(apiCallSuccess({ movieData: allMovies.toString() }))

            // Specific 
            if (onSuccess) {
                dispatch({ type: onSuccess.popularMoviesReceived, payload: allMovies[0].data.results })
                dispatch({ type: onSuccess.topRatedMoviesReceived, payload: allMovies[1].data.results })
                dispatch({ type: onSuccess.upcomingMoviesReceived, payload: allMovies[2].data.results })
            }

            if (setTimestamp)
                dispatch({ type: setTimestamp });

            if (onEnd)
                dispatch({ type: onEnd })

        })
        .catch(error => {
            console.log(error.message)
            // General 
            dispatch(apiCallFailed(error.message))
            // Specific
            if (onError)
                dispatch({ type: onError, payload: error.message })
            if (onEnd)
                dispatch({ type: onEnd })
        })

    //         // ----------------------------------------------
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             // General
    //             dispatch(apiCallSuccess({ data }))
    //             // Specific 
    //             if (onSuccess)
    //                 dispatch({ type: onSuccess, payload: data })
    //             if (onEnd)
    //                 dispatch({ type: onEnd })
    //         })
    //         .catch(error => {
    //             // General 
    //             dispatch(apiCallFailed(error.message))
    //             // Specific
    //             if (onError)
    //                 dispatch({ type: onError, payload: error.message })
    //             if (onEnd)
    //                 dispatch({ type: onEnd })
    //         })
    // // -------------------------------------------------------
    // next(action)
    // if request is successful dispatch success action

    // if request failed dispatch failure action

}


export default api;