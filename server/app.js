const express =require('express');
const app=express();
const dotenv =require("dotenv");
const mongoose =require('mongoose');

const cookieparser=require("cookie-parser");
app.use(cookieparser());

dotenv.config({path: './config.env'});
require('./db/conn');
//const User =require('./model/userSchema');
app.use(express.json());
//link the router files
app.use(require('./router/auth'));
const PORT = process.env.PORT;

/* app.get('/',(req,res)=>{
    res.send(`hello from server from app.js`)
}); */
/* const middleware =(req,res,next)=>{
    console.log("Hello my MiddleWare ");
    next();
} */
/* app.get('/about', middleware, (req,res)=>{
    res.send('Hello World from about');
}); */

/* app.get('/contact', (req,res)=>{
    res.send('Hello World from the contact');
}); */
app.get('/signin', (req,res)=>{
    res.send('Hello World from the signup');
});
app.get('/login', (req,res)=>{
    res.send('Hello World from the login');
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



