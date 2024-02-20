import react, {useState} from "react";
import '../Components/HomeDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StaffLogin } from './StaffLogin';
import { Link } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
      setShowLogin(!showLogin);
    };


    const onBtn_luxeryButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);
    
    const onBtn_wallButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_woodButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_smallButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    const onBtn_1ButtonClick = useCallback(() => {
    
      setShowLogin(true); 
    }, [setShowLogin]);

    return (
    <div className="Classmain">
    <div className="Class1">
           
            <div className="class2">
                <form className="Texts1">Welcome to</form> 
                <form className="contain_1">
                <form>
                  <Link to="/StaffLogin">
                <button className="Btn_1">LOG IN</button>
                  </Link></form> 
                </form>
                <div className="Logos">
                    <form><span></span> </form>
                </div>
                     <div className="Texts2">
                        <form> CERAMICS TILES STOREROOM</form> 
                        <form className="Texts3">where inspiration comes in boxes</form>
                    </div>
            </div> 
            
        </div>
        <form className="text4">Welcome to our NEW Ceramics TileStoreroom website.
             We will be adding more ranges to our site on a weekly basis,
              for our full range, please visit our store.</form>
               <form className="text4_1">SRI LANKA WIDE DELIVERY NOW AVAILABLE</form>
            <form className="text5">Tile Collection</form>
        <div className="containerr">
        <form >
          <button className="Btn_luxery" onClick={onBtn_luxeryButtonClick}>
          <form className="text6">Luxury Tiles</form>
          </button>
        </form>
        
      <form >
          <button className="Btn_wall" onClick={onBtn_wallButtonClick}> 
          <form className="text6">Wall Tiles</form>
          </button>
        </form>
        <form >
          <button className="Btn_wood" onClick={onBtn_woodButtonClick}>
          <form className="text6">Wood Effect</form>
          </button>
        </form>
        <form >
          <button className="Btn_small" onClick={onBtn_smallButtonClick}>
          <form className="text6">Small Tiles</form>
          </button>
        </form>
        </div>

        <div className="Class_pro">
        <table className="product-table">
          <thead>
          <tr>
              <th className="Text2w">Main menu </th>
              <th className="Text2w">Information</th>
              <th className="Text2w">Our Store</th>
              </tr>
              </thead>
              <tbody>
               <tr>
                <td>
                <form className="text7">
                <button onClick={onBtn_luxeryButtonClick}>Luxury Tiles</button>
                </form>
                <form className="text7">
                <button  onClick={onBtn_luxeryButtonClick}>Wall Tiles</button>
                </form>
                <form className="text7">
                <button  onClick={onBtn_luxeryButtonClick}>Wood Effect</button>
                </form>
                <form className="text7">
                <button onClick={onBtn_luxeryButtonClick}>Small Tiles</button>
                </form>
                </td>
              
              <td>
                <form>
                <button className="text7" >Like us on Facebook</button>
                </form>
                <form>
                <button className="text7">Follow us on Instagram</button>
                </form>
                <form>
                <button className="text7">Terms of Service </button>
                </form>
                </td>
              
              <td>
                <form className="text7">No 4/3,</form>
                <form className="text7">Hapugala,</form>
                <form className="text7">Galle.</form>
                </td>
             </tr>
                </tbody> 
        </table>
         {/* Conditionally render the login page */}
         {showLogin && <StaffLogin />}
      </div>

    </div>       
  );
};
export default Home;