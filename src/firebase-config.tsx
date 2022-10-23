import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOKoVxODKsKWBI4_bG_JI5S_7H2aOWqVs",
  authDomain: "cata-shadow.firebaseapp.com",
  projectId: "cata-shadow",
  storageBucket: "cata-shadow.appspot.com",
  messagingSenderId: "337903222842",
  appId: "1:337903222842:web:5e5891bb4df5beee5f3503",
  measurementId: "G-9G1KDD072J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
