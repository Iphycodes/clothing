import firebase from 'firebase/app'

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

const auth = getAuth(app)
const firestore = getFirestore(app)


const provider = new GoogleAuthProvider()


auth.languageCode = 'it'

provider.setCustomParameters({
    'prompt' : 'select-account'
})

export const signInWithGoogle = () => {
    signInWithPopup()
}