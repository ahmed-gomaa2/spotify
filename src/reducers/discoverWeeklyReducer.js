export default function (state= null, action) {
    switch (action.type) {
        case'GET_DISCOVER_WEEKLY':
            return action.payload
        default:
            return state
    }
}