import React,{useState} from "react"
import Button from "react-bootstrap/Button"
import { useFirebase } from "../context/firebase"
import Form from "react-bootstrap/Form"
const ListingPage=()=>
{
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
         await firebase.handleCreateNewListing(name,isbnNumber,price,coverPic);

    }
    const firebase=useFirebase();
    const [name,setName]=useState("");
    const [isbnNumber,setisbnNumber]=useState("");
    const [price,setPrice]=useState("");
    const [coverPic,setCoverPic]=useState("");
    return(
          <div className="container mt-5">
        <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicBookname">
        <Form.Label>Enter Book name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)}
        value={name}
         type="text" placeholder="Book name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicbookisbn">
        <Form.Label >ISBN</Form.Label>
        <Form.Control 
        onChange={(e)=>setisbnNumber(e.target.value)}
        value={isbnNumber}
         type="text" placeholder="ISBN number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicbookprice">
        <Form.Label >Price</Form.Label>
        <Form.Control 
        onChange={(e)=>setPrice(e.target.value)}
        value={price}
         type="text" placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicfile">
        <Form.Label >Upload File Cover</Form.Label>
        <Form.Control 
        onChange={(e)=>setCoverPic(e.target.files[0])}
        
         type="file" placeholder="Enter price" />
      </Form.Group>
      
     
      <Button variant="primary" type="submit">
       Create
      </Button>
      
    </Form>
        </div>
    )
}

export default ListingPage;