import React,{useEffect,useState} from "react"
import CardGroup from "react-bootstrap/CardGroup";
import {useFirebase} from '../context/firebase'
import BookCard from "../pages/Card"
const Home=()=>
{ 
    const [books,setBooks]=useState([]); 
    const firebase=useFirebase();
    useEffect(()=>
    {
        firebase.ListAllBooks().then((books)=>setBooks(books.docs));

    },[firebase])
    return (
        
        <div className="container">
            <CardGroup>
                {books.map(book=><BookCard link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()}/>)}
            </CardGroup>
           
        </div>
    )
}
export default Home;