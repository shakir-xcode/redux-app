import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice = createSlice({
    name: 'team members',
    initialState: {},
    reducers: {
        addTeamMember: (state, action) => {
            state[++id] = {
                name: action.payload.name,
                bugs: [],
            }
        },
        assignBug: (state, action) => {
            state[action.payload.id].bugs.push(action.payload.bug);
        },
    }
})

export const { addTeamMember, assignBug } = slice.actions;
export default slice.reducer;


//  MEMBERS SELECTOR
export const selectAllTeamMembers = (state) => {
    let members = [];
    let teamMembers = state.entites.teamMembers;
    for (let member in teamMembers)
        members.push({ name: teamMembers[member].name })

    return members;
}
export const selectBugsAssigned = (state, id) => ({
    name: state.entites.teamMembers[id].name,
    bugs: state.entites.teamMembers[id].bugs
});