// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // sendSignInLinkToEmail,
} from "firebase/auth";
import dotenv from 'dotenv'
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
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

export async function signInUserWithEmailPass(email: string, password: string) {
  const auth = getAuth();
 await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const isEmailVerified = user.emailVerified
    console.log(isEmailVerified);  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
  }






export async function signUpUserWithEmailPass(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
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





// const actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be in the authorized domains list in the Firebase Console.
//   url: 'http://localhost:1234/dashboard',
//   // This must be true.
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: 'com.example.ios'
//   },
//   android: {
//     packageName: 'com.example.android',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   dynamicLinkDomain: 'unqueue.page.link'
// };

// export async function verifyEmail(email : string) {
// const auth = getAuth();
// await sendSignInLinkToEmail(auth, email, actionCodeSettings)
// .then(() => {
//   // The link was successfully sent. Inform the user.
//   // Save the email locally so you don't need to ask the user for it again
//   // if they open the link on the same device.
//   window.localStorage.setItem('emailForSignIn', email);
//   // ...
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log(errorCode,errorMessage)
// });
// }



