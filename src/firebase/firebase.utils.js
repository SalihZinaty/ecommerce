import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4NcF_u1DViTBJWBg_C7zfpyjySvZrBII",
    authDomain: "ecommerce-db-5e150.firebaseapp.com",
    databaseURL: "https://ecommerce-db-5e150.firebaseio.com",
    projectId: "ecommerce-db-5e150",
    storageBucket: "ecommerce-db-5e150.appspot.com",
    messagingSenderId: "1087499729084",
    appId: "1:1087499729084:web:b0a15690597567026838b9",
    measurementId: "G-BBB3SWC3NY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
