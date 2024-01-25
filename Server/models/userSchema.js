const mongoose = require("mongoose");
const validator = require("validator");

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){          //validate func ma value parameter ha jo user ki email ko
            if (!validator.isEmail(value)) {       //chack kary ga k email valid ha k nhi
                throw new Error("Not Valid Email")
            }
        }
    },
    age: {
        type:String,
        required:true
    },
    mobile: {
        type:Number,
        required:true
    },
    work: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required:true
    },
    desc: {
        type:String,
        required:true
    }
});

const users = new mongoose.model("usersdata",userShema);

module.exports = users;