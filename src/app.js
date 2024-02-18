require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const UserModel = require('./model/user')
const UserRouter = require('./routes/user')
const StaffModel = require('./model/staff')
const StaffRouter = require('./routes/staff')
const ProductsRouter = require('./routes/products')
const OrderRouter = require('./routes/orders')


const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/staff',StaffRouter);
app.use('/api/v1/products', ProductsRouter);
app.use('/api/v1/orders',OrderRouter)

app.use((err,req,res,next)=>{
    if(createHttpError.isHttpError(err)){
        res.status(err.status).send({message:err.message});
    }else{
        res.status(500).send({message:err.message});
    }
   res.status(500).send({message: "Error Unknown"});

})
module.exports = app;
