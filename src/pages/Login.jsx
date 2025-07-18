import React, {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useFirebase} from '../context/firebase'
import Button from "react-bootstrap/Button"

import Form from "react-bootstrap/Form"
const Login=()=>
{
    
    const firebase=useFirebase();
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // useEffect(()=>
    // {
    //     if(firebase.isLoggedIn)
    //     {
    //         navigate("/");
             
    //     }

    // },[firebase,navigate])
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log("Login a user....");
        const result=await firebase.signinUserWithEmailAndPass(email,password);
        console.log("successful",result);
    }
    return(
        <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)}
        value={email}
         type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
         type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
       Login Account
      </Button>
      <h1 className="mt-5 mb-5">OR</h1>
      <Button onClick={firebase.signinWithGoogle} variant="danger">Sign In With Google</Button>
    </Form>
        </div>
    )
} 
export default Login;