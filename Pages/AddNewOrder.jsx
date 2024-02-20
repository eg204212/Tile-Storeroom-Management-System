import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Components/AddOrderDesign.css';
import { useCallback } from "react";

export const AddNewOrder = () => {
    const [CustomerName, setCustomerName] = useState('');
    const [Product_Type, setProduct_Type] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Date, setDate] = useState('');
    const [Total_Price, setTotal_Price] = useState('');
    const [Order_Status, setOrder_Status] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3003/api/v1/orders", {
                CustomerName,
                Product_Type,
                Quantity,
                Date,
                Total_Price,
                Order_Status,
            });
            navigate("/AllOrderDetails"); // Navigate to AllOrderDetails after successful save
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Classa_1"> 
            <div className="content_001">
                <div className="Class2po_1">
                    <form onSubmit={handleSubmit}>
                        <span className="Text3ao">Add New Order</span>

                        <div className="form-group">
                            <label htmlFor="CustomerName">Customer Name:</label>
                            <input
                                className="Box1_o"
                                type="text"
                                id="CustomerName"
                                name="CustomerName"
                                value={CustomerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Product_Type">Product Type:</label>
                            <input
                                className="Box2_o"
                                type="text"
                                id="Product_Type"
                                name="Product_Type"
                                value={Product_Type}
                                onChange={(e) => setProduct_Type(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="Quantity">Quantity:</label>
                            <input
                                className="Box3_o"
                                type="text"
                                id="Quantity"
                                name="Quantity"
                                value={Quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="Date">Date:</label>
                            <input
                                className="Box4_o"
                                type="date"
                                id="Date"
                                name="Date"
                                value={Date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Total_Price">Total Price:</label>
                            <input
                                className="Box5_o"
                                type="text"
                                id="Total_Price"
                                name="Total_Price"
                                value={Total_Price}
                                onChange={(e) => setTotal_Price(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Order_Status">Order Status:</label>
                            <input
                                className="Box6_o"
                                type="text"
                                id="Order_Status"
                                name="Order_Status"
                                value={Order_Status}
                                onChange={(e) => setOrder_Status(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <button className="Btn_regp" type="submit">Save</button>
                        </div>

                        {/*
                        <div className="class2po_2">
                     <form></form>
                      </div>*/}
                      
                    </form>
                </div>
            </div>
        </div>
    );
};

