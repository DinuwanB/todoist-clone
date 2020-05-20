import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "t.com",
    databaseURL: "https://-..com",
    projectId: "-clone",
    storageBucket: "-..com",
    messagingSenderId: "",
    appId: "1:::"
})

export { firebaseConfig as firebase }