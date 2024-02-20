import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Components/AddProDesign.css';

const EditProducts = () => {
  //const { productId } = useParams(); // Retrieve the product ID from the URL

  const [Product_Type, setProduct_Type] = useState('');
  const [Product_Description, setProduct_Description] = useState('');
  const [Brand, setBrand] = useState('');
  const [Unit_Price, setUnit_Price] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');
  
  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get(`http://localhost:3003/api/v1/products/${productId}`);
        const productData = response.data;

        setProduct_Type(productData.Product_Type);
        setProduct_Description(productData.Product_Description);
        setBrand(productData.Brand);
        setUnit_Price(productData.Unit_Price);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductData();
  }, [productId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Define updated product data

    const updatedProductData = {
      Product_Type: Product_Type,
      Product_Description: Product_Description,
      Brand: Brand,
      Unit_Price: Unit_Price,
    };
    
    try {
      // Make a PUT request to update the product
      const response = await axios.put(
        `http://localhost:3003/api/v1/products/${productId}`,
        updatedProductData
      );

      console.log('Product updated:', response.data);
      
      // Use the navigate function to go to the /AllProductDetails page
      navigate('/AllProductDetails');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Classa_1">
        <div>
        <form className="Text1"></form>
      </div>

      <div className="content_001">

    <div className="Class2_1">
    <form><span className="Text3a">Edit Products</span></form>
       
      <form onSubmit={handleUpdate}>
        <div>
         <form className="Text_reg_1">
          <label >Product Type:</label>
          <input className="Box1_p"
            type="text"
            value={Product_Type}
            onChange={(e) => setProduct_Type(e.target.value)}
          /></form>
        </div>
        <div><form className="Text_reg_11">
          <label className="Text_reg">Product Description:</label>
          <input className="Box2_p"
            type="text"
            value={Product_Description}
            onChange={(e) => setProduct_Description(e.target.value)}
          /></form>
        </div>
        <div><form className="Text_reg_12">
          <label >Brand:</label>
          <input className="Box3_p"
            type="text"
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
          /></form>
        </div>
        <div><form className="Text_reg_13">
          <label >Unit Price:</label>
          <input className="Box4"
            type="text"
            value={Unit_Price}
            onChange={(e) => setUnit_Price(e.target.value)}
          /></form>
        </div>
        <button className="Btn_reg11" type="submit">Save</button>
      </form>
    </div>
    </div>
    </div>
  );
};
export default EditProducts;