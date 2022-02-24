import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCYaqgJbl72R_qZLtc2O9HmjP9X8-1am10",
    authDomain: "crwn-db-e31fa.firebaseapp.com",
    projectId: "crwn-db-e31fa",
    storageBucket: "crwn-db-e31fa.appspot.com",
    messagingSenderId: "132540789602",
    appId: "1:132540789602:web:34f3120da7eb8fb6e2f23b",
    measurementId: "G-DH0ZCDM5KE"
  };

  export const createUserProfiledocument = async (userAuth, additionalData)=> {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt =  new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;