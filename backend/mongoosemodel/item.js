const mongoose=require('mongoose');
const User=require('./user');
const{Schema}=mongoose;
const Giftschema=new Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    itemName:{
        type:String
    },
    Description:{
        type:String
    },
    Price:{
        type:Number
    },
    PhoneNo:{
        type:String
    }
})
const Item=mongoose.model('Item',Giftschema);
module.exports=Item;