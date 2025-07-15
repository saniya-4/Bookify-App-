import React from "react"
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import '../App.css'
const BookCard=(props)=>
{
  const navigate=useNavigate();
    return(
        <div className="bookcard mt-5 " >
            <Card style={{ width: '18rem', margin:"5px" ,height:"235px" }}>
      
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has a title {props.name} and is sold by {props.userEmail} and this book costs Rs.{props.price}
        </Card.Text>
        <Button onClick={(e)=>navigate(props.link)} variant="primary">View</Button>
      </Card.Body>
    </Card>
        </div>

    )
}
export default BookCard;