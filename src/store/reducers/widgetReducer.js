const initState = {
    sort: { type: 'createdAt', order: 'desc' } 
}
const postReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'SET_NEWEST':
            console.log('newest', action.sort)
            return state;
        case 'SET_NEWEST_ERROR':
            console.log('newest error', action.err)
            return state;        
        default:
            return state
     }
}

export default postReducer