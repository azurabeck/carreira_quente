export const createContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        firestore.collection('contacts').add({
            ...contact, 
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CONTACT', contact })
        }).catch((err) => {
            dispatch({type: 'CREATE_CONTACT_ERROR', err})
        })
        
    }
}
