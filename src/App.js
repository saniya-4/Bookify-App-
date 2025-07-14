import "bootstrap/dist/css/bootstrap.min.css"
import Register from "./pages/Register"
import Login from "./pages/Login"
import {Routes,Route} from "react-router-dom";
import  ListingPage from "./pages/ListingPage"
import MyNavbar from "./pages/Navbar";

import './App.css';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
    <Route  path="/" element={<h1>Home</h1>}/>
    <Route path="/login" element={<Login/>}/>  
    <Route path="/register" element={<Register/>}/>
    <Route path="/book/list" element={<ListingPage/>}/>
   </Routes>
    </div>
   
  );
}

export default App;
