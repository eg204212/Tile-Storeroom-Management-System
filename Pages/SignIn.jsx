import react, {useState} from "react";
import '../Components/Design.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export const SignIn = () => {
    const navigate = useNavigate();

    const onBtn_2ButtonClick = useCallback(() => {
        navigate("/ResetPW");
      },[navigate]);

      const onBtn_1ButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
      },[navigate]);

      const onBtnn_1ButtonClick = useCallback(() => {
        navigate("/StaffLogin");
      },[navigate]);

      const onBtn_02ButtonClick = useCallback(() => {
        navigate("/UserRegister");
      },[navigate]);
      

    return (
    <div className="Class1">
           
            <div>
                <form className="Text1">WELCOME!</form> 
           </div> 

           <div className="Logo">
            <form><span></span> </form>
           </div>
           
            <div className="Text2">
                <form> Tiles & Bathware </form> 
                <form> Storeroom  </form> 
                <form> Management System </form> 
            </div>
        
            <div className="Class2">
                <div className="Text3">SIGN IN</div>
                    <form ><input className="Box1"  type="text" placeholder="User name" /></form>
                    <form ><input className="Box2"  type="Password" placeholder="Password"  /></form>

                    <form><button className="Btn_1" onClick={onBtn_1ButtonClick}>LOG IN </button></form> 

                <form><button className="Btnn_1" onClick={onBtnn_1ButtonClick}>Login as a staff</button></form>

                <form ><button className="Btn_02" onClick={onBtn_02ButtonClick}>Create a new Account </button></form>

                    <form><button className="Btn_2" onClick={onBtn_2ButtonClick}>Forgot password? </button></form>
           </div>
        </div>
        
    );
}