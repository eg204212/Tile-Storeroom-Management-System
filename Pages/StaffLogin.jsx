import React, { useState } from "react";
import '../Components/StaffLoginDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const StaffLogin = () => {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    const onBtn_2ButtonClick = useCallback(() => {
        navigate("/ResetPW");
    }, [navigate]);

    const onBtn_1ButtonClick = useCallback(() => {
        navigate("/Selection");
    }, [navigate]);
    const onBtn_3ButtonClick = useCallback(() => {
      navigate("/StaffRegister");
  }, [navigate]);
  const onBtn_backButtonClick = useCallback(() => {
    navigate("/");
}, [navigate]);




    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="Classmain1">
            <form>
            <span className="t1" onClick={onBtn_backButtonClick}>Back to Home  </span>
                <button className="arrow" onClick={onBtn_backButtonClick}></button>
                </form>
            <div className="content1">
                <div className="Class2ss">
                    <form className="login">Login</form>
                    <form className="senten">Enter your credentials to access your account</form>
                    <form className="UN">Employee ID</form>
                    <form>
                        <input className="Box0_1" type="text" placeholder="Enter Your Empl_ID" />
                    </form>
                    <form className="PW">Password</form>
                    <form>
                        <input className="Box0_1" type="Password" placeholder="**********" />
                    </form>
                    <div className="content2">
                        <form className="checkbox-and-link">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                Remember me
                            </label>
                            <span className="forgot-password" onClick={onBtn_2ButtonClick}>Forgot password?</span>
                        </form>
                    </div>
                    <span className="Btn0_1" onClick={onBtn_1ButtonClick}>LogIn</span>
                    <form>Don't have an Account
                   <span className="signup" onClick={onBtn_3ButtonClick}>Sign Up?</span> </form>
                
                </div>
              
                <div className="class2sp">
                     <form></form>
                </div>
            </div>
        </div>
    );
};

export default StaffLogin;