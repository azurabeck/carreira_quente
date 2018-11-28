export const editAbout = (about) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        firestore.collection('about').add({
            ...about, 
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'EDIT_ABOUT', about })
        }).catch((err) => {
            dispatch({type: 'EDIT_ABOUT_ERROR', err})
        })
        
    }
}