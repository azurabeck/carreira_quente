const initState = {
    msgs: [
        {   
            content: 'lorem ipsun'
        }
    ]
}
const contactReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'EDIT_ABOUT':
            console.log('edit about', action.about)
            return state;
        case 'EDIT_ABOUT':
            console.log('edit about error', action.err)
            return state;
        default:
            return state
     }
}

export default contactReducer