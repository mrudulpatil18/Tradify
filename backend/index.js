const express=require('express');
const app=express();
const mongoose=require('mongoose');


app.get('/',(req,res)=>{
    res.send("hello world");    
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})