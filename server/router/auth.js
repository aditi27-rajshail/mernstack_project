const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt =require ('jsonwebtoken');
require('../db/conn');
const User = require('../model/userSchema');
const authenticate= require('../middleware/authenticate');

router.get('/', (req, res) => {
    res.send('Hello World from the server from auth.js');
});
/* //Add Data
router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {    //Required Data
        return res.status(422).json({ error: "All the fields are required" });
    }
    //Check id email exists
    User.findOne({ email: email })  //if email matched with one of the stored data email then return 422 Error
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email Already Exist" });
            }
            const user = new User({ name, email, phone, work, password, cpassword }); //create a new user for all fields; does not return any promise
            user.save().then(() => {                                                  //save the user; return promises 
                return res.status(201).json({ message: "User Registered Sucessfully" })
            }).catch((err) => {                                                        //catch error display 500 DB error
                return res.status(500).json({ error: "Failed to Registerd" })
            });
        }).catch((err) => { console.log(err) });                                      //catch error to find dataabase         

}); */

//Using Async Functions

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "All the fields are required" });
    }
    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email Already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        //userSchema to hassh password
        await user.save();
        res.status(201).json({ message: "User Registered Sucessfully" })


    } catch (err) {
        console.log(err);
    }

});
//user signin

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {                   //if email and password is empty return error
            return res.status(400).json({ message: " Please fill all data" })
        }
        const userLogin = await User.findOne({ email: email })     //check if email of DB matched with the email of user entered data
        
        if (userLogin) {    
            const isMatch = await bcrypt.compare(password, userLogin.password);  //email matches check password //userLogin will display all the data and containes .password
            const token = await userLogin.generateAuthToken(); //tokens
            console.log(token);

            res.cookie("jwtoken", token,{
               expires: new Date(Date.now()+ 25892000000),
               httpOnly: true 
            });
            
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentiales" }); //pasword did not match
            }
            else
                res.json({ message: "User logged In sucessfully" }); 
        }
        else {
            res.status(400).json({ error: "Invalid Credentiales" });  //email did not match
        }

    } catch (err) {
        console.log(err);
    }
});

router.get('/about', authenticate, (req,res)=>{
    console.log('Hello my About');
    res.send(req.rootUser);
}); 

router.get('/getdata', authenticate,(req,res)=>{
    console.log('Hello my getdata');
    res.send(req.rootUser);
});


router.post('/contact', authenticate, async (req,res)=>{
    console.log("hello my contact");
    try {
        const {name, email, phone, message} = req.body;
        if(!name || !email || !phone || !message){
            console.log("Error in contact form");
            return res.json({error:"Please fill all the categories"});
        }
        const userContact = await User.findOne({_id:req.userID});
        console.log("founded user");
        if(userContact){
             const userMessage = await userContact.addMessage(name, email, phone, message);
             await userContact.save();
             res.status(201).json({message:"user contact sucess"})
        }
        
    } catch (error) {
        console.log(error)
    }
    
});

router.get('/logout', (req,res)=>{
    console.log('Hello log out page')
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('user Logged Out');
});

module.exports = router;