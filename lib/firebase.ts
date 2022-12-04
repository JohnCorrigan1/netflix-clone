import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_g1DbDjm5nKJLzH3hmuvQwxyNspnH5RI",
    authDomain: "notflix-62ee5.firebaseapp.com",
    projectId: "notflix-62ee5",
    storageBucket: "notflix-62ee5.appspot.com",
    messagingSenderId: "969301244760",
    appId: "1:969301244760:web:fe5cf41698b6c88199032d",
    measurementId: "G-BLD6W6H2V5"
  };

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();