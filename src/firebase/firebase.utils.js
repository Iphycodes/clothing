import { initializeApp } from 'firebase/app';

import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const config = {
  apiKey: "AIzaSyBtNFm60mplE5hEHNIcUBjpDaDb5Z4w97c",
  authDomain: "ifyclothing-db.firebaseapp.com",
  projectId: "ifyclothing-db",
  storageBucket: "ifyclothing-db.appspot.com",
  messagingSenderId: "704560509170",
  appId: "1:704560509170:web:0f1114a5673ad727aa606b",
  measurementId: "G-JEB9RRKSKD"
}


const app = initializeApp(config);

export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = {
    googleProvider: new GoogleAuthProvider()
}

auth.languageCode = 'it'

provider.googleProvider.setCustomParameters({
    'prompt' : 'select_account'
})

export const signInWithGoogle = async () => {

    let userDetail = null;

    await signInWithPopup(auth, provider.googleProvider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;


        userDetail = user
        // ...

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        
        // const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(`${errorCode}: ${errorMessage}, ${credential}`)
        // ...
      });

      return userDetail;
}