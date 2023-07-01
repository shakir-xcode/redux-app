import reducer from "./bugs";

function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = listener => listeners.push(listener);

    const dispatch = (action) => {
        state = reducer(state, action);

        listeners.forEach(listener => listener());
    }

    return {
        getState,
        dispatch,
        subscribe,
    }
}

export default createStore(reducer);

