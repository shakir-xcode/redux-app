
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

let lastId = 0;
export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
            return [...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            }
            ]

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)

        case BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id ?
                { ...bug, resolved: true } : bug
            )
    }
}