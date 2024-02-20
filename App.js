import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {SignIn} from './Pages/SignIn'; 
import {StaffLogin} from './Pages/StaffLogin'; 
import UserRegister from './Pages/UserRegister'; 
import StaffRegister from './Pages/StaffRegister'; 
import {ResetPW} from './Pages/ResetPW';
import {StaffProfile} from './Pages/StaffProfile'; 
import {AddNewProduct} from './Pages/AddNewProduct'; 
import {AddNewOrder} from './Pages/AddNewOrder'; 
import {AllProductDetails} from './Pages/AllProductDetails'; 
import {AllOrderDetails} from './Pages/AllOrderDetails'; 
import EditProducts from './Pages/EditProducts'; 
import {Home} from './Pages/Home'; 
import {Selection} from './Pages/Selection'; 
import {selectUser} from "./slices/userSlice";
import{useSelector} from "react-redux";


function App() {
  
  
 return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/StaffLogin" element={<StaffLogin/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>
        <Route path="/StaffRegister" element={<StaffRegister/>}/>
        <Route path="/ResetPW" element={<ResetPW/>}/>
        <Route path="/StaffProfile" element={<StaffProfile/>}/>
        <Route path="/AddNewProduct" element={<AddNewProduct/>}/>
        <Route path="/EditProducts" element={<EditProducts/>}/>
        <Route path="/AddNewOrder" element={<AddNewOrder/>}/>
        <Route path="/Selection" element={<Selection/>}/>
        <Route path="/AllProductDetails" element={<AllProductDetails/>}/>
        <Route path="/AllOrderDetails" element={<AllOrderDetails/>}/>
      </Routes>
    </Router>
  </div>
);
}

export default App;
