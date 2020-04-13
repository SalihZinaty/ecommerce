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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;