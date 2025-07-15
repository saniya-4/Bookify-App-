import React, {useEffect,useState} from "react"
import Form from "react-bootstrap/Form"
import {useParams} from "react-router-dom"
import Button from "react-bootstrap/Button"

import { useFirebase } from "../context/firebase";

const BookDetail=()=>
{
    const params=useParams();
    const [data,setData]=useState(null);
    const [qty,setQty]=useState(1);
    const firebase=useFirebase();
    console.log(data);
    useEffect(()=>{
        firebase.getBookById(params.bookId).then(value=>setData(value.data()));
    },[])
     const placeorder=async()=>
     {
        const result=await firebase.placeorder(params.bookId,qty);
        console.log("order placed",result);
     }
    if(data===null )
    {
        return <h1>Loading.....</h1>
    }
    return(
        <div className="container">
           <h1>{data.name}</h1> 
           <h1>Details</h1>
           <p>Price:Rs.{data.price}</p>
           <p>ISBN NUMBER:{data.isbn} </p>
           <h1>Owner Details</h1>
           <p>Email: {data.userEmail}</p>
           <Form.Control
           onChange={(e)=>setQty(e.target.value)}
           value={qty}
           type="number"
           placeholder="Enter Qty"></Form.Control>
           <Button onClick={placeorder} variant="success">Buy Now</Button>

        </div>

    )
}
export default BookDetail;