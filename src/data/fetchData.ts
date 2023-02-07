import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "unqueue-548b5.firebaseapp.com",
  databaseURL: "https://unqueue-548b5-default-rtdb.firebaseio.com",
  projectId: "unqueue-548b5",
  storageBucket: "unqueue-548b5.appspot.com",
  messagingSenderId: "673597937174",
  appId: "1:673597937174:web:75c4d771d61a5ceefa4737",
  measurementId: "G-8QC6X19KM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export async function fetchData(setDataFromAPI: Function) {
  let arrayOfObjects: object[] = [];
  const querySnapshot = await getDocs(collection(db, "data"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arrayOfObjects.push(doc.data());
    // console.log(doc.data());
  });
  //   console.log(arrayOfObjects);
  setDataFromAPI(arrayOfObjects);
}
