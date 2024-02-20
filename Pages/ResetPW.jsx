import react, {useState} from "react";
import '../Components/ResetPWDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const ResetPW = () => {
    const navigate = useNavigate();

    const onBtn_rButtonClick = useCallback(() => {
        navigate("/StaffLogin");
      },[navigate]);

    
    return (
        <div className="Classmain1">
            <div>
                <form className="Text1"></form> 
           </div> 
           <div className="content_01">

          
            <div className="Class2p_1">
                <form>
                    <span className="Text3p">ResetYour Password</span>
                        </form> 
             
             <form> 
            <span className="Text_e_reg">Email</span>
             <input className="Box1_e_r" 
              type="text" 
              placeholder="Email" />
              </form>
    
            <form>
             <span className="Text_n_reg" >NICNO</span>
             <input className="Box1_n_r" 
              type="text" 
              placeholder="NICNO" /></form>
             
             <form>
             <span className="Text_pw_reg">NewPassword</span>
             <input className="Box1_pw_r" 
              type="password"
               placeholder="********" /></form>
             
             <form>
             <span className="Text_cp_reg">ConfirmNewPassword</span>
             <input className="Box1_cp_r" 
              type="password" 
              placeholder="********" /></form>

             <form><button className="Btnp_r" 
             onClick={onBtn_rButtonClick}>Finish</button></form>
           </div>  
           <div className="class2p_2">
                     <form></form>
                </div>
           </div>
        </div>
        
    );
}