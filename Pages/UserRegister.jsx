import React, { useState } from "react";
import axios from "axios";
import '../Components/Design.css';

 const UserRegister = () => {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Contact_No, setContact_No] = useState("");
    const [Email, setEmail] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3002/api/v1/users", {
            FirstName: FirstName,
            LastName:LastName,
            Contact_No:Contact_No,
            Email:Email,
            UserName:UserName,
            Password:Password,

        }).then((response) => {
          console.log(response);
          window.location.href = "/";
        }).catch((error) => {
          alert("Error")
          console.log(error);
        });
    
        setUserName("");
        setPassword("");
      };
 
  return (
    <div className="Class1_1">

      <div>
        <form className="Text1"></form>
      </div>

      <div className="Class2_1">
        <form>
          <span className="Text3">Create New Account</span>
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">First Name</span>
          <input className="Box1_1"  
          type="Firstname" placeholder="First name" value={FirstName}
            onChange={(e) => setFirstName(e.target.value)} />
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">Last Name</span>
          <input className="Box1_1" name="LastName"   type="LastName" placeholder="Last name" 
          onChange={(e) => setLastName(e.target.value)}/>
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">Contact_No</span>
          <input className="Box1_11" value={Contact_No}  type="text" placeholder="Contact_No" 
          onChange={(e) => setContact_No(e.target.value)}/>
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">Email</span>
          <input className="Box1_12" value={Email}  type="Email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">UserName</span>
          <input className="Box1_1" value={UserName}  type="UserName" placeholder="UserName" 
          onChange={(e) => setUserName(e.target.value)}/>
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <span className="Text_reg">Password</span>
          <input className="Box1_1" name={Password} type="Password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </form>


        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="Btn_reg1"  
          type="save">Save</button>
        </form>
      </div>
    </div>
  );
};
export default UserRegister;
