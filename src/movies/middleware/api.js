import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)


    const { url, onSuccess, onStart, onError, onEnd } = action.payload;
    if (onStart)
        dispatch({ type: onStart })
    next(action)
    try {
        const response = await fetch(url)
        const data = await response.json();

        // General
        dispatch(actions.apiCallSuccess({ data }));
        // Specific
        if (onSuccess)
            dispatch({ type: onSuccess, payload: data })
        if (onEnd)
            dispatch({ type: onEnd })
    } catch (error) {
        // General
        dispatch(actions.apiCallFailed(error.toString()))
        // Specific
        if (onError)
            dispatch({ type: onError, payload: error.toString() })
        if (onEnd)
            dispatch({ type: onEnd })
    }
}

export default api;