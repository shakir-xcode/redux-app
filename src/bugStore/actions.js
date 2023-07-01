import { createAction } from '@reduxjs/toolkit';
import * as actions from "./actionTypes";

export const bugAdded = createAction(actions.BUG_ADDED)
export const bugResolved = createAction(actions.BUG_RESOLVED)
export const bugRemoved = createAction(actions.BUG_REMOVED)


// Action creation Manually
// export const bugAdded = (description) => ({
//     type: actions.BUG_ADDED,
//     payload: {
//         description,
//     }
// })


