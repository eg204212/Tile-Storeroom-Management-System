import react, {useState} from "react";
import '../Components/SelectionDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export const Selection = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);


    const onBtn_profileButtonClick = useCallback(() => {
        navigate("/StaffProfile");
    }, [navigate]);
    
    const onBtn_productsButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_ordersButtonClick = useCallback(() => {
        navigate("/AllOrderDetails");
    }, [navigate]);

    const onBtn_backButtonClick = useCallback(() => {
        navigate("/StaffLogin");
    }, [navigate]);
    const onBtn_backhomeButtonClick = useCallback(() => {
        navigate("/");
    }, [navigate]);


    return (
    <div className="Classmain_1" >
        <div className="class2">
                <div className="Logo">
                </div>
                     <div className="Text2">
                        <form> CERAMICS TILES STOREROOM</form> 
                    </div>
                
            </div> 
        <div className="content_11">

        <div className="class2_2">
            <form>
        <button className="con1">
            <span className="profile" onClick={onBtn_profileButtonClick}>View Profile </span>  
            <button className="r_arrow"></button>
            </button>
            </form>

            <form>
            <button className="con1">
            <span className="profile" onClick={onBtn_productsButtonClick}>View Products</span> 
            <button className="r_arrow"></button> 
            </button>
            </form>

            <form>
            <button className="con1">
            <span className="profile" onClick={onBtn_ordersButtonClick}>View Orders</span>  
            <button className="r_arrow"></button> 
            </button>
            </form>

            <form>
            <button className="con1">
            <span className="profile" onClick={onBtn_backButtonClick}>Back</span>  
            <button className="r_arrow"></button> 
            </button>
            </form>

            <form>
            <button className="con1">
            <span className="profile" onClick={onBtn_backhomeButtonClick}>Back to Home</span>  
            <button className="r_arrow"></button> 
            </button>
            </form>

        </div>

            <div className="Class22_1">
           
        </div>
        
        </div>
        </div>
    
  

        
  );
};
export default Selection;