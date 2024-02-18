const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({

    Product_Type:{
        type:String,
        required:true,
    },
    Product_Description:{
        type:String,
        required:true,
    },
    Brand:{
        type:String,
        required:true,
    },
    Unit_Price:{
        type:Number,
        required:true,
    },
    Image:{
        type:Buffer,
        required:false,
    }
    
});
const Products = mongoose.model('Products',productsSchema);
module.exports = Products;