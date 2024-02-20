import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Components/AllProDesign.css';

export const AllOrderDetails = () => {
    const [Search_here, setSearch_here] = useState('');
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3003/api/v1/orders/all");
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }

        fetchData();
    }, []);

    const onDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:3003/api/v1/orders/${orderId}`);
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    const onBtn_logoutsButtonClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onBtn_backButtonClick = useCallback(() => {
        navigate("/Selection");
    }, [navigate]);

    return (
        <div className="Classp1">
            <div>
                <form className="Text1_pro">All Order Details</form>
            </div>

            <form>
                <input className="Box_search" value={Search_here} onChange={(e) => setSearch_here(e.target.value)} type="text" placeholder="Search_here" id="Search_here" name="Search_here" />
            </form>

            <form className="container_c1">
                <button className="Btnlogout" onClick={onBtn_logoutsButtonClick}>Log Out</button>
            </form>

            <form className="container_c1">
                <button className="Btnback" onClick={onBtn_backButtonClick}>Back</button>
            </form>

            <div className="Class_pro">
                <table className="product-table">
                    <thead>
                        <tr className="Text2w">
                            <th >CustomerName</th>
                            <th >Product_Type</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Total_Price</th>
                            <th>Order_Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr className="Text3c" key={index}>
                                <td>{order.CustomerName}</td>
                                <td>{order.Product_Type}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.Date}</td>
                                <td>{order.Total_Price}</td>
                                <td>{order.Order_Status}</td>
                                <td>
                                    <button className="BtnD" onClick={() => onDeleteOrder(order._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
