const logger = param => store => next => action => {
    console.log('store : ', store)
    console.log('logging : ', param)
    next(action);
}

export default logger;