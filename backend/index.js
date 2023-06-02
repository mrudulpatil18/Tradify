const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const cors=require('cors');
const User=require('./mongoosemodel/user');
const{createToken,verifyToken}=require('./authentication/auth');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chirag:nepal@cluster0.dkvr5me.mongodb.net/tradify?retryWrites=true&w=majority";
const dbName = "tradify";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const db = client.db(dbName);
async function run() {
  
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   
  
}
run().then(e=>console.log("connected to db")).catch(console.dir);

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const url= "mongodb+srv://chirag=:nepal@cluster0.dkvr5me.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
 
//     await mongoose.connect(url);
  
// }
// run().then(e=>console.log("connected to db")).catch(console.dir);

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/tradify');
    
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// main().then((e)=>console.log("connected to db")).catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world");    
})

app.post('/addsellitem',verifyToken,async(req,res)=>{
    const{Name,Description,imageUrl,phoneno}=req.body;

})
app.get('/getsellitems',verifyToken,async(req,res)=>{
    const col=db.collection("Item");
    const allitems=await col.findall({User:req.user});
    res.send(allitems);
})


app.post('/login',async(req,res)=>{
    const{Username,password}=req.body;
    const col=db.collection("User");   
    const founduser=await col.findOne({Username:Username});
    if(founduser){
        const hash=founduser.password;  
        const found=await bcrypt.compare(password,hash);
        if(found){
            const accessToken=createToken(founduser);
            res.json({token:accessToken});
        }
        else{        
            res.status(400).json({error:"password didnt match"});
        }
    }
    else{
        res.status(400).json({error:"email doesn't exist"});
    }
})

app.post('/register',async(req,res)=>{
    const{Name,username,password,phoneNo,regNo}=req.body;
    console.log(req.body);
    const col=db.collection("User");
    const hash=await bcrypt.hash(password, 10);
    if(hash){
        const saved=await col.insertOne({username:username,password:hash,Name:Name,phoneNo:phoneNo,regNo:regNo});
        // const saved=await newUser.save();
        console.log(saved);
        if(saved){
            return res.send({success:"successfully registered"});
        }
        else{
           return res.status(400).send({error:"user not registered"});
        }
    }
    else{

        return res.status(400).send({error:"there is some error"});
    }
})

app.delete('/deletegift/:id',verifyToken,async(req,res)=>{
    const{id}=req.params;
    const col=db.collection("Items");
    const del=await col.findByIdAndDelete(id);
    if(del){
        return res.send({success:"successfully deleted"})
    }
    return res.status(400).send({msg:"error"});
})


app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})