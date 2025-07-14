import {createContext,useContext,useState,useEffect} from "react"
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth"
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
const firebaseAuth=getAuth(firebaseApp);
const firestore=getFirestore(firebaseApp);
const googleProvider=new GoogleAuthProvider();
export const FirebaseProvider=(props)=>
{
  const [user,setUser]=useState(null);
  useEffect(()=>
  {
    onAuthStateChanged(firebaseAuth,(user)=>
    {
      if(user)
      {
        setUser(user);
      }
      else{
        setUser(null);
      }
    })
  })
  const signinWithGoogle=()=>signInWithPopup(firebaseAuth,googleProvider);
  const isLoggedIn=user?true:false;
  const handleCreateNewListing=(name,isbn,price,cover)=>
  {

  }
   const signupUserWithEmailAndPassword=(email,password)=>
    createUserWithEmailAndPassword(firebaseAuth,email,password);
   const signinUserWithEmailAndPass=(email,password)=>
      signInWithEmailAndPassword(firebaseAuth,email,password);
   return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,
   signinUserWithEmailAndPass,
   signinWithGoogle,
   handleCreateNewListing,
   isLoggedIn}}>
        {props.children}
    </FirebaseContext.Provider>
}