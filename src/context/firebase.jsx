import {createContext,useContext} from "react"
import {initializeApp} from "firebase/app"
const FirebaseContext=createContext(null);
export const useFirebase=()=>useContext(FirebaseContext);
const firebaseConfig = {
  apiKey: "AIzaSyBgfM-eQmKX5wdyBg2RbhHT_topdn98YH8",
  authDomain: "bookify-1f3f0.firebaseapp.com",
  projectId: "bookify-1f3f0",
  storageBucket: "bookify-1f3f0.firebasestorage.app",
  messagingSenderId: "79730044862",
  appId: "1:79730044862:web:d6c1381d1924bd4be693ef"
};
const firebaseApp=initializeApp(firebaseConfig);
export const FirebaseProvider=(props)=>
{
    return <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
}