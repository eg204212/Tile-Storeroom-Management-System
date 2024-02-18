const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    CustomerName:{
        type:Schema.Types.ObjectId,
        type: String,
        ref:'User',
        required:true,
    },
    Product_Type:{
        type:Schema.Types.ObjectId,
        type:String,
        ref:'Products',
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Total_Price:{
        type:Number,
        required:true
    },
    Order_Status:{
        type:String,
        required:true
    },
    
});
const Order = mongoose.model('Order',orderSchema);
module.exports = Order;