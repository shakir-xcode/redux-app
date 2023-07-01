import configureStore from "./bugStore/store";
import { bugAdded, bugRemoved, bugResolved } from './bugStore/actions';

let a = 10 / 0;

// const store = configureStore();

// console.log('store --> ', store)
// console.log('store state --> ', store.getState())
// store.subscribe(() => {
//     console.log('store changed...', store.getState())
// })


// store.dispatch(bugAdded({ description: 'bug1' }));
// store.dispatch(bugAdded({ description: 'bug2' }));
// store.dispatch(bugAdded({ description: 'bug3' }));

// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(bugRemoved({ id: 3 }))


import { createAction } from '@reduxjs/toolkit';
import createStore from './anotherStore/store';
import reducer from './anotherStore/reducer';


const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

const store = createStore(reducer);
console.log(store);

console.log("intitial state --> ", store.getState())

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug1"
    }
})

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug2",
    }
})

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug3",
    }
})


store.dispatch({
    type: BUG_RESOLVED,
    payload: {
        id: 1
    }
})

store.dispatch({
    type: BUG_REMOVED,
    payload: {
        id: 3
    }
})

console.log("final state --> ", store.getState())



