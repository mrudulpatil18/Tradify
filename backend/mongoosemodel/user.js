const mongoose=require('mongoose');
const {Schema}=mongoose;
const loginschema=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    phoneno:{
        type:String
    },
    regNo:{
        type:Strimg
    }
})
const Login=mongoose.model('Login',loginschema);
module.exports=Login;
