import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom";
import {useFirebase} from "../context/firebase";
const ViewOrderDetails=()=>
{
    const firebase=useFirebase();
    const params=useParams();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        firebase.getOrders(params.bookId).then((orders)=>setOrders(orders.docs));

    },[firebase])
    console.log(params);
    return (
        <div className="container">
            <h1>Orders</h1>
           
            
        </div>
    )
}
export default ViewOrderDetails;