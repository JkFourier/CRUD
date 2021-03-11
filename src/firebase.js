import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDGKKsfvAY0yb03DTeOYE1IOcuJooedzY",
    authDomain: "crud-d3e23.firebaseapp.com",
    projectId: "crud-d3e23",
    storageBucket: "crud-d3e23.appspot.com",
    messagingSenderId: "851382973274",
    appId: "1:851382973274:web:caca9c3ffccbf6d1bb7963"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)