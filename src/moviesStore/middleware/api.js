import { apiCallBegan, apiCallSuccess, apiCallFailed } from "../apiActions";

const api = ({ dispatch, getState }) => next => action => {
    if (action.type !== apiCallBegan.type) return next(action);

    next(action)
    // do api request
    const { url, onSuccess, onEnd, onStart, onError } = action.payload;

    if (onStart)
        dispatch({ type: onStart });

    // TODO:  multiple urls are to be fetched      
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // General
            dispatch(apiCallSuccess({ data }))
            // Specific 
            if (onSuccess)
                dispatch({ type: onSuccess, payload: data })
            if (onEnd)
                dispatch({ type: onEnd })
        })
        .catch(error => {
            // General 
            dispatch(apiCallFailed(error.message))
            // Specific
            if (onError)
                dispatch({ type: onError, payload: error.message })
            if (onEnd)
                dispatch({ type: onEnd })
        })

    // next(action)
    // if request is successful dispatch success action

    // if request failed dispatch failure action

}

export default api;