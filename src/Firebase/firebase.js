import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey : '',
    authDomain : '',
    databaseURL : '',
    projectID : '',
    storgeBucket : '',
    messagingSenderId : '',
    appId : ''
})

export { firebaseConfig as firebase }