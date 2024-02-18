const ProductModel = require('../model/products')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')

exports.ProductCreate = async (req,res,next) => {
    const{
        Product_Type,
        Product_Description,
        Brand,
        Unit_Price
    }= req.body;
        try{
            if(!Product_Type || !Product_Description || !Brand || !Unit_Price){
                throw createHttpError(400, 'Please add all the required Details')
            }
    const products = new ProductModel({
        Product_Type,
        Product_Description,
        Brand,
        Unit_Price
    });
        const result = await products.save();
        res.status(201).send(result);
    
        }catch (error){
            next(error)
        }
}

exports.ProductUpdate = async (req,res,next) => {
    const productId = req.params.id;
    const{
        Product_Type,
        Product_Description,
        Brand,
        Unit_Price
        }= req.body;
        
    try{
        if (!mongoose.isValidObjectId(productId)){
            throw createHttpError(400,"Invalid Id")
        }

        if(!Product_Type || !Product_Description || !Brand || !Unit_Price){
            throw createHttpError(400, 'Please add all the required Details')
        }
        const products = await ProductModel.findById(productId).exec();

        if (!products){
            throw createHttpError(404, 'Product not found');
        }
        products.Product_Type = Product_Type;
        products.Product_Description = Product_Description;
        products.Brand = Brand;
        products.Unit_Price = Unit_Price;

        const result = await products.save();
        res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}
exports.ProductDelete = async (req,res,next) => {
    const productId = req.params.id;

    try{
        if (!mongoose.isValidObjectId(productId)){
            throw createHttpError(400,"Invalid Id")
    }
    const products = await ProductModel.findByIdAndDelete(productId).exec();

    if (!result){
        throw createHttpError(404, 'Product not found');
    }
    res.status(200).send(result);
    }catch (error) {
        next (error)
    }
}

exports.GetallProducts = async (req,res,next) => {
    try {
        const result = await ProductModel.find().exec();
            res.status(200).send(result);
    }catch (error){
        next(error)
    }
}

exports.GetOneProduct = async (req,res,next) => {
    const Id = req.params.id;

    try{
        if (!mongoose.isValidObjectId(Id)){
            throw createHttpError(400,"Invalid Id")
        }
        const result = await ProductModel.findById(Id).exec();

        if (!result){
            throw createHttpError(404, 'Product not found');
        }
        res.status(200).send(result);
    }catch (error){
    next(error)
    }
}

exports.SearchProduct = async (req,res,next) => {
    const query = req.query.q;
    try{
        if(!query){
            throw createHttpError(400,"Please search the query")
        }
        const result = await ProductModel.find({name: {$regex: query,$options:'i'}}).exec();
        if(!result){
            throw createHttpError(404, 'Product not found');
        }
        res.status(200).send(result);
    }catch (error){
        next(error)
    }
}

