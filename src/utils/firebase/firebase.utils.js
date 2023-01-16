import { initializeApp } from "firebase/app";

import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAPzlSUMJaek6pl5-Qlh3NY0lPcBslRtOA",
  authDomain: "learning-app-21d60.firebaseapp.com",
  projectId: "learning-app-21d60",
  storageBucket: "learning-app-21d60.appspot.com",
  messagingSenderId: "308773540247",
  appId: "1:308773540247:web:589b9530c7dfe45c3b74d2"
};


const app = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = ()=> signInWithPopup(auth, GoogleProvider);



//data Base

export const db = getFirestore();

export const createUserDocmentFromAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)
  
  if (!userSnapshot.exists()) {
      const {displayName, email}  = userAuth;
      const createdAt = new Date();

      try{
          await setDoc(userDocRef,{
              displayName,
              email,
              createdAt
          })
      }catch(error){
          console.log('error', error.message)
      }
  }


// console.log(userSnapshot.exists());
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth, email, password)
}