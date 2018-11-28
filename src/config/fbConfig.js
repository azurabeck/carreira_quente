import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCwix9HPdvPyAe8xFMNsONLeuWTGgq_GJc",
    authDomain: "carreiraquente-23957.firebaseapp.com",
    databaseURL: "https://carreiraquente-23957.firebaseio.com",
    projectId: "carreiraquente-23957",
    storageBucket: "carreiraquente-23957.appspot.com",
    messagingSenderId: "762423339228"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;