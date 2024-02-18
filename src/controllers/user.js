const UserModel = require('../model/user')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.UserLogin = async (req,res,next) => {
    const UserName = req.body.UserName
    const Password = req.body.Password

    try{
        if(!UserName || !Password){
            throw createHttpError(400, 'Missing required Details')
        }
    const user = await UserModel.findOne({UserName: UserName}).exec();

    if(!user){
        throw createHttpError(400, 'User already exists')
    }
    const isPasswordValid = await bcrypt.compare(Password,user.Password);

    if(!isPasswordValid){
        throw createHttpError(400,'Invalid credentials')
    }
    

    const token = jwt.sign(
        {
            user_id: user._id,
            UserName:user.UserName,
        },
        process.env.JWT_TOKEN_KEY,
        {
            expiresIn:"4h",
        }
    );
    user.token =token;
    const result = await user.save();

        const response ={
            id: result._id,
            FirstName: result.FirstName,
            LastName: result.LastName,
            Email:result.Email,
            Contact_No:result.Contact_No,
            token: result.token,
            userType: "user"
        }
        console.log(response);

    res.status(200).send(response);

    }catch(error){
        next(error)
    }
}

exports.UserRegister = async (req,res,next) => {
  
        const FirstName = req.body.FirstName
        const LastName = req.body.LastName
        const Contact_No = req.body.Contact_No
        const Email = req.body.Email
        const UserName = req.body.UserName
        const Password = req.body.Password
        try{
            if(!FirstName || !LastName || !Contact_No || !Email || !UserName || !Password){
                throw createHttpError(400, 'Missing required Details')
            }
    
            const isUserAvailable =await UserModel.findOne({Email: Email}).exec();
                if(isUserAvailable){
                    throw createHttpError(400,'User already exists')
                }
                const hashedPassword = await bcrypt.hash(Password,12);
                const user = new UserModel({
                    FirstName: FirstName,
                    LastName: LastName,
                    Contact_No: Contact_No,
                    Email: Email,
                    UserName: UserName,
                    Password: hashedPassword
                })
    
                const result = await user.save();
                res.status(201).send(result);
    
        }catch (error){
            next(error)
    
        }
}
