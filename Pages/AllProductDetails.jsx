import React, { useState, useEffect } from "react";
import '../Components/AllProDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AllProductDetails = () => {
  const [Search_here, setSearch_here] = useState('');
  const [Product_Type, setProduct_Type] = useState("");
  const [Product_Description, setProduct_Description] = useState("");
  const [Brand, setBrand] = useState("");
  const [Unit_Price, setUnit_Price] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3003/api/v1/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3003/api/v1/products/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const onBtn_office1ButtonClick = useCallback(() => {
    navigate("/AddNewProduct");
  }, [navigate]);

  const onBtn_orderButtonClick = useCallback(() => {
    navigate("/AddNewOrder");
  }, [navigate]);
  const onBtn_logoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onBtn_backButtonClick = useCallback(() => {
    navigate("/Selection");
  }, [navigate]);

  return (
    <div className="Classp1'">
      <div className="container_c">
      <div className="Logoo">
                </div>
        <form className="Text1_pro">All Product Details</form>
      </div>
      <div>
        <form className="container_c">
          <input className="Box_search" value={Search_here} onChange={(e) => setSearch_here(e.target.value)} type="text" placeholder="Search_here" id="Search_here" name="Search_here" />
        </form>
        <div>
        <form className="container_c1">
          <button className="Btnlogout" onClick={onBtn_logoutButtonClick}>Log Out</button>
        </form>
        <form className="container_c1">
          <button className="Btnback" onClick={onBtn_backButtonClick}>Back</button>
        </form>
        <form className="container_c1">
          <button className="BtnAdd" onClick={onBtn_office1ButtonClick}>+ ADD NEW</button>
        </form>
        </div>
        <form className="container_c1">
          <button className="BtnOrder" onClick={onBtn_orderButtonClick}> - ORDER NOW</button>
        </form>
      </div>
      <div className="Class_pro">
        <table className="product-table">
          <thead>
            <tr className="Text2w">
              <th >Product Type</th>
              <th >Product Description</th>
              <th>Brand</th>
              <th>Unit Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr className="Text3c" key={index}>
                <td>{product.Product_Type}</td>
                <td>{product.Product_Description}</td>
                <td>{product.Brand}</td>
                <td>{product.Unit_Price}</td>
                <td>
                  <button className="BtnE" onClick={() => navigate(`/EditProducts?productId=${product._id}`)}></button>
                </td>
                <td>
                  <button className="BtnD" onClick={() => onDeleteProduct(product._id)}></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="office">
        <div className="ButtonContainer"></div>
      </div>
    </div>
  );
};
