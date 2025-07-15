import {createContext,useContext,useState,useEffect} from "react"
import {initializeApp} from "firebase/app"
import {getFirestore,collection,addDoc,getDocs,doc,getDoc,query,where} from "firebase/firestore"
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  reload
} from "firebase/auth"
const FirebaseContext=createContext(null);
export const useFirebase=()=>useContext(FirebaseContext);
const firebaseConfig = {
  apiKey: "AIzaSyBgfM-eQmKX5wdyBg2RbhHT_topdn98YH8",
  authDomain: "bookify-1f3f0.firebaseapp.com",
  projectId: "bookify-1f3f0",
  storageBucket: "bookify-1f3f0.appspot.com",
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
  const ListAllBooks=()=>
  {
    return getDocs(collection(firestore,'books'));
  }
  const getBookById=async(id)=>
  {
    const docRef=doc(firestore,'books',id);
    const res=await getDoc(docRef);
    return res;

  }
  const placeorder=async(bookId,qty)=>
  {
    const collectionRef=collection(firestore,"books",bookId,"order");
    const result=await addDoc(collectionRef,{
      userId: user.uid,
      userEmail: user.email,
      qty:Number(qty),

    });
    return result;

  }
  
 
  const fetchMyBooks=async(userId)=>
  {
    
    const collectionRef=collection(firestore,"books");
    const q=query(collectionRef,where("userId","==",userId))
    const result=await getDocs(q);
    return result;

  }
  const getOrders=async(bookId)=>
  {
    const collectionRef=collection(firestore,"books",bookId,"orders")
    const result=await getDocs(collectionRef);
    return result;

  }
  const isLoggedIn=user?true:false;
  console.log("the user is",isLoggedIn);
  console.log(user);
  const handleCreateNewListing = async (name, isbn, price) => {
    return await addDoc(collection(firestore, 'books'), {
      name,
      isbn,
      price,
      userId: user.uid,
      userEmail: user.email,
      photoURL: user.photoURL,
    });
  };
   
   const signinUserWithEmailAndPass=(email,password)=>
      signInWithEmailAndPassword(firebaseAuth,email,password);
   return <FirebaseContext.Provider value={{
   signinUserWithEmailAndPass,
   signinWithGoogle,
   handleCreateNewListing,
   ListAllBooks,
   getBookById,
   placeorder,
   fetchMyBooks,
   getOrders,
   user,
 
   isLoggedIn}}>
        {props.children}
    </FirebaseContext.Provider>
}