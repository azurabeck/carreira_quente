const initState = {
    msgs: [
        {   
            id: '1', 
            name: 'help me find', 
            email: 'rebeccagsouza@gmail.com' , 
            tel: '(21) 975803541' ,
            content: 'Magna eiusmod labore nulla veniam deserunt excepteur.'
        }
    ]
}
const contactReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'CREATE_CONTACT':
            console.log('craeted_msg', action.contact)
            return state;
        case 'CREATE_CONTACT':
            console.log('create msg error', action.err)
            return state;
        default:
            return state
     }
}

export default contactReducer