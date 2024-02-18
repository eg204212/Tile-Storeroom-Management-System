const OrderModel = require('../model/orders')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

exports.OrderCreate = async (req,res,next) => {
    const{
        CustomerName,
        Product_Type,
        Quantity,
        Date,
        Total_Price,
        Order_Status
    }= req.body;

    try{
        if(!CustomerName || !Product_Type || !Quantity || !Date || !Total_Price || !Order_Status){
            throw createHttpError(400, 'Please provide all the required details');
        } 
       // const CustomerId = mongoose.Types.ObjectId(CustomerName);
      //  const ProductId = mongoose.Types.ObjectId(Product_Type);

        const orders = new OrderModel({
            CustomerName,
            Product_Type,
            Quantity,
            Total_Price,
            Date,
            Order_Status

        });

        const result = await orders.save();
        res.status(201).send(result);
    }catch(error){
        next(error);
    }
}
exports.GetordersByStaff = async (req,res,next) => {
    const EmployeeId = req.params.id;
    try{
 const orders = await OrderModel.find({Employee_No:EmployeeId}).populate('CustomerName').populate('Product_Type').populate('Date').populate('Total_Price').exec();
        res.send(orders);
    } catch (error){
        next(error)
    }
}
exports.GetordersByUser = async (req,res,next) => {
    const CustomerId = req.params.id;
    try{
        const orders = await OrderModel.find({CustomerName:CustomerId}).populate('CustomerName').populate('Product_Type').populate('Date').populate('Total_Price').exec();
        res.send(orders);
    } catch (error){
        next(error)
    }
}

exports.GetallOrders = async (req,res,next) => {
    try {
        const result = await OrderModel.find().exec();
            res.status(200).send(result);
    }catch (error){
        next(error)
    }
}
exports.OrderDelete = async (req,res,next) => {
    const orderId = req.params.id;

    try{
        if (!mongoose.isValidObjectId(orderId)){
            throw createHttpError(400,"Invalid Id")
    }
    const orders = await OrderModel.findByIdAndDelete(orderId).exec();

    if (!result){
        throw createHttpError(404, 'Order not found');
    }
    res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}