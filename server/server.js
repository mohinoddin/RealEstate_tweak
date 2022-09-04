const express = require("express");
const app = express();
const mongoose = require("mongoose");
const property=require("./routes/property")




const signupModal = require("./models/signup-Modal");
const  PropertyDetailsModel=require("./models/addPropertyModel");

const { checkExistinguser, generatePasswordHash } = require("./utility")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
require('dotenv').config(); //for setting environment variables on server

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))




app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


//dilip changes
app.post('/addnewproperty', (req, res) => {
    const newProperty = PropertyDetailsModel({
        propertyType: req.body.propertyType,
        price: req.body.price,
        propertyAge: req.body.propertyAge,
        propertyDiscription: req.body.propertyDiscription,
        negotiable: req.body.negotiable,
        ownership: req.body.ownership,
        propertyApproved: req.body.propertApproved,
        bankLoan: req.body.bankLoan,
        length: req.body.length,
        breadth: req.body.breadth,
        totalArea: req.body.totalArea,
        areaUnit: req.body.areaUnit,
        noOfBHK: req.body.noOfBHK,
        noOfFloor: req.body.noOfFloor,
        attached: req.body.ttached,
        westernToilet: req.body.westernToilet,
        furnished: req.body.furnished,
        carParking: req.body.carParking,
        lift: req.body.lift,
        electricity: req.body.electricity,
        facing: req.body.facing,
        name: req.body.name,
        mobile: req.body.mobile,
        postedBy: req.body.postedBy,
        saleType: req.body.saleType,
        featuredPackage: req.body.featuredPackage,
        PPDPackage: req.body.PPDPackage,
        image:req.body.image,
        email: req.body.email,
        city: req.body.city,
        area: req.body.area,
        pincode: req.body.pincode,
        address: req.body.address,
        landmark: req.body.landmark,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        views: 0, // default is 0
        Status: "Unsold", // default is unsold
        daysLeft: 10, //Defalt is 10
    })
    newProperty.save().then((data) => {
        console.log('Property Added')
        res.send('Property Added');
    }).catch(err => console.log(err));
});


//starting the server
app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("server started")
    } else {
        console.log(err)
    }
})


//mongo db connection
const mongoDB =process.env.ATLAS_URI;
mongoose.connect(mongoDB, {}).then((res) => {
    console.log("connected to db")
}).catch((err) => {
    console.log(err)
})


//mohin changes
app.get('/',(req,res)=>{
  res.send("base route")
})

app.use("/getProperty",property);


//thrinath changes

app.post("/signup", async (req, res) => {
    if (await checkExistinguser(req.body.email)) {
        res.status(200).send("email already exist")
    } else {
        generatePasswordHash(req.body.password).then((passwordHash) => {
            signupModal.create({ email: req.body.email, password:passwordHash }).then((data) => {
                res.status(200).send("user signedup sucessfully")
            }).catch((err) => {
                res.status(400).send(err.message)
            })

        })
        
    }
})

app.post("/signin",(req,res)=>{
    
    signupModal.find({ email: req.body.email }).then((userData) => {
        
        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val) => {
                if (val) {
                    const authToken = jwt.sign(userData[0].email,process.env.SECRET_KEY);
                    console.log(1)
                    res.status(200).send({ authToken} );
                } else {
                    res.status(400).send("invalid password please enter correct password")
                }
            })
        } else {
            res.status(400).send("email not exist please signup")
        }
    })
})


app.post("/logout",(req,res)=>{
    authToken=""
    res.status(200).send("loggedout sucessfully")
})