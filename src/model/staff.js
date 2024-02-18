const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({

    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Contact_No:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Employee_No:{
        type:String,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required: false,
        }
        
    
});
const Staff = mongoose.model('Staff',staffSchema);
module.exports = Staff;