const logger = state => next => action => {
    console.log('Action Type: ', action.type)
    next(action)
}

export default logger;