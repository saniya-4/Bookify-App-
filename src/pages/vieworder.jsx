import React,{useEffect,useState} from "react"
import BookCard from "../pages/Card"
import {useFirebase} from '../context/firebase'
const Order=()=>
{
    const [books,setBooks]=useState([]);
    const firebase=useFirebase();

    useEffect(() => {
    if(firebase.isLoggedIn)
        firebase.fetchMyBooks(firebase.user.uid)?.then((books)=>setBooks(books.docs));
    },[firebase]);
   console.log("books is",books);
   if(!firebase.isLoggedIn)
   {
    return <h1>Please logged in</h1>
   }
    return (
        <div>
            {
                books.map(books=><BookCard  link={`/books/orders/${books.id}`} key={books.id} id={books.id} {...books.data()}/>)
            }
        </div>
    );
};
export default Order;