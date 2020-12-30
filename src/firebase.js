import firebase from 'firebase';


const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyBYugaRB0-K2CcyXmtlC_5EONQiQSaVqcc",
    authDomain: "clone-33215.firebaseapp.com",
    databaseURL: "https://clone-33215.firebaseio.com",
    projectId: "clone-33215",
    storageBucket: "clone-33215.appspot.com",
    messagingSenderId: "600612674580",
    appId: "1:600612674580:web:c0c22521c04a0c03615b01",
    measurementId: "G-LQVYCP6FQQ"
})

// const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {auth};

