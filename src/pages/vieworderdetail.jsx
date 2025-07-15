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
        <div className="container mt-3 ">
            <h1>Orders</h1>
            {console.log("orders:", orders)}
            {
                orders.map((order)=>
                {
                    const data=order.data();
                   return(
                    <div className="mt-5" style={{border:"1px solid", padding:"10px"}}> 
                        <h5>Order By:{data.userEmail}</h5>
                        <h6>Qty:{data.qty}</h6>
                    </div>
                    
                   )
                })
            }
           
            
        </div>
    )
}
export default ViewOrderDetails;