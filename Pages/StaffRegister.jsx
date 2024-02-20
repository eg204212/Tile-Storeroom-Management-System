import React, { useState } from "react";
import '../Components/RegisterDesign.css';
import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const StaffRegister = (props) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Contact_No, setContact_No] = useState('');
  const [Email, setEmail] = useState('');
  const [Employee_No, setEmployee_No] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const onBtn_savepButtonClick = useCallback(() => {
    navigate("/StaffLogin");
  }, [navigate]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:3003/api/v1/staff", {
      FirstName: FirstName,
      LastName: LastName,
      Contact_No: Contact_No,
      Email: Email,
      Employee_No: Employee_No,
      UserName: UserName,
      Password: Password,
    }).then((response) => {
      console.log(response);
      window.location.href = "/StaffLogin";
    }).catch((error) => {
      console.log(error);
    });

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setContact_No("");
    setEmail("");
    setEmployee_No("");
    setUserName("");
    setPassword("");
  };

  return (
    <div className="Classmain1">
      <div>
        <form className="Text1c"></form>
      </div>
      <div className="register">
      </div>
      <div className="Class2_1">

        <form onSubmit={(e) => handleSubmit(e)}>
          
          <div>
            <span className="Text_regg">First Name</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="First name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Last Name</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="Last name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Contact No</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="Contact No"
              value={Contact_No}
              onChange={(e) => setContact_No(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Email</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Employee No</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="Employee No"
              value={Employee_No}
              onChange={(e) => setEmployee_No(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Username</span>
            <input
              className="Box1_1"
              type="text"
              placeholder="Username"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <span className="Text_regg">Password</span>
            <input
              className="Box1_1"
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
              <div>
              <button className="Btn_regp" type="submit">Save</button>
            </div>
             </form>
      </div>
    </div>
  );
};

export default StaffRegister;
