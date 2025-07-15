import "bootstrap/dist/css/bootstrap.min.css"
import Register from "./pages/Register"
import Login from "./pages/Login"
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home'; 
import BookDetail from "./pages/Deatil";
import  ListingPage from "./pages/ListingPage"
import MyNavbar from "./pages/Navbar";
import Order from './pages/vieworder'
import ViewOrderDetails from "./pages/vieworderdetail";

import './App.css';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>  
    <Route path="/register" element={<Register/>}/>
    <Route path="/book/list" element={<ListingPage/>}/>
    <Route path="/book/view/:bookId" element={<BookDetail/>}/>
    <Route path="/book/orders" element={<Order/>}/>
    <Route path="/books/orders/:bookId" element={<ViewOrderDetails/>}/>
   </Routes>
    </div>
   
  );
}

export default App;
