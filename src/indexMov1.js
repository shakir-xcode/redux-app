import store from './movies/customStore';
import { loadMovies, movieAdded, movieRemoved } from './movies/movieSlice';

// store.subscribe(() => console.log('state changed...'))
store.dispatch(movieAdded({
    id: 1,
    name: 'john wick'
})
)


// store.dispatch((dispatch) => {
//     dispatch({ type: 'error', message: 'an error occured...' })
// })


store.dispatch(loadMovies())

setTimeout(() => {
    store.dispatch(loadMovies())
}, 2000)


// store.dispatch({
//     type: 'callBegan',
//     payload: {
//         url: 'http://localhost:4000',
//         onSuccess: 'dataReceived',
//         onError: 'apiRequestFailed',
//     }
// })

// store.dispatch(movieAdded(
//     {
//         id: 2,
//         name: 'spiderman'
//     })
// )

// store.dispatch(movieAdded(
//     {
//         id: 3,
//         name: 'batman'
//     })
// )

// store.dispatch(movieRemoved(
//     {
//         id: 2,
//     })
// )
