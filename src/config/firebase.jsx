import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyA5AT2FyRpZbbB_CCKZb20A9rAKIdRmAO4",
  authDomain: "fir-course-44209.firebaseapp.com",
  projectId: "fir-course-44209",
  storageBucket: "fir-course-44209.appspot.com",
  messagingSenderId: "647916700604",
  appId: "1:647916700604:web:d34051056d7d54cfb221b9",
  measurementId: "G-ZMTDQB406Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
