import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB6XkTxNZEqRv_xI9EaRtx3gEzPE1z8NuI",
    authDomain: "on-track-64c33.firebaseapp.com",
    projectId: "on-track-64c33",
    storageBucket: "on-track-64c33.appspot.com",
    messagingSenderId: "715025015126",
    appId: "1:715025015126:web:c4bf908b44049b29f736f7",
    measurementId: "G-ZC1NWWH18V"
  };

firebase.initializeApp(config);
firebase.analytics();
//firebase.firestore().enablePersistence();
export default firebase;