import react, {useState} from "react";
import '../Components/StaffProDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const StaffProfile = () => {
    const navigate = useNavigate();


      const onBtn1_prfButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
      },[navigate]);

      const onBtnn1_prfButtonClick = useCallback(() => {
        navigate("/AllOrderDetails");
      },[navigate]);

    
    return (
      <div className="Classs01">
        
            <div className="Class_prff">

            <form><span className="Text3p1">Staff Profile</span></form>
            <div className="Logoprf">
           </div>
                <form className="Text_regp">UserName
                <input className="Box1_prf" type="UserName" />
                </form>
                <form className="Text_regp">Name
                <input className="Box2_prf"type="Password"/>
                </form>
                <form className="Text_regp">Email
                <input className="Box3_prf" type="Email"/>
                </form>


                <form >
                <button className="Btn1_prf" onClick={onBtn1_prfButtonClick}>View Products </button>
                </form> 
                <form>
                <button className="Btn1_prf" onClick={onBtnn1_prfButtonClick}>View Orders </button>
                </form>
                
           </div>
           


      </div>
        
    )
}