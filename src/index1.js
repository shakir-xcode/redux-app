import configureStore from "./myBugStore/configureStore";
import { bugAdded, bugRemoved, bugResolved, selectUnresolvedBugs } from "./myBugStore/bug2";
import * as projectActions from "./myBugStore/projects";
import {
    addTeamMember, assignBug,
    selectAllTeamMembers,
    selectBugsAssigned
} from './myBugStore/teamMembers';


const store = configureStore();

store.subscribe(() => console.log('store changed...'))

// store.dispatch(({ dispatch, getState }) => {
//     // CALL THE API
//     // When the promise is resolved => dispatch()
//     dispatch({ type: 'bug received', bugs: [1, 2, 5] })
//     console.log(getState());
// })

store.dispatch(projectActions.projectAdded({ name: 'Project 1... ' }))
// store.dispatch(projectActions.projectAdded({ name: 'Project 2... ' }))
// store.dispatch(projectActions.projectAdded({ name: 'project 3... ' }))
// store.dispatch(projectActions.projectRemoved({ id: 1 }))

// store.dispatch(bugAdded({ description: 'bug2...' }))
// store.dispatch(bugAdded({ description: 'bug1...' }))
// store.dispatch(bugAdded({ description: 'bug3...' }))
// store.dispatch(bugResolved({ id: 1 }))
// store.dispatch(bugActions.bugRemoved({ id: 3 }))


// store.dispatch(addTeamMember({ name: 'john doe' }))
// store.dispatch(addTeamMember({ name: 'jane joe' }))

let bugs = store.getState().entites.bugs;

// store.dispatch(assignBug({ id: 1, bug: bugs[0] }))
// store.dispatch(assignBug({ id: 1, bug: bugs[1] }))
// store.dispatch(assignBug({ id: 2, bug: bugs[2] }))


// console.log(selectAllTeamMembers(store.getState()))
// console.log(selectBugsAssigned(store.getState(), 1))
// console.log(selectBugsAssigned(store.getState(), 2))

