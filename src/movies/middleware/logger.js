const logger = store => next => action => {
    console.log('action type: ', action.type);
    // console.log('state : ', store.getState())
    next(action)
}

export default logger;