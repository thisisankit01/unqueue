// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyCbf2VhleTZS_ma0c2gK_jl0ojoCF_CCaA",
  authDomain: "unqueue-548b5.firebaseapp.com",
  databaseURL: "https://unqueue-548b5-default-rtdb.firebaseio.com",
  projectId: "unqueue-548b5",
  storageBucket: "unqueue-548b5.appspot.com",
  messagingSenderId: "673597937174",
  appId: "1:673597937174:web:75c4d771d61a5ceefa4737",
  measurementId: "G-8QC6X19KM6",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);

export { auth };
export async function signInUserWithEmailPass(email: string, password: string) {
  console.log("sigin func called");
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
}

export async function signUpUserWithEmailPass(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
}

export async function logOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("logged out succesfully");
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
}
