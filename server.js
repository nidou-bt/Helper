const express=require('express');
const path = require("path");
const connectDB=require('./config/connectDB')
require("dotenv").config()
const app=express();
//connect with DB
connectDB();

//router
app.use(express.json());
//user
app.use("/api/user", require("./router/User.router"))
// Work Ad
app.use("/api/workad",require("./router/WorkAd.router"))
// Search Ad
app.use("/api/searchad",require("./router/SearchAd.router"))
app.use(express.static(path.resolve(__dirname, "./client/build")));


const PORT=process.env.PORT;
app.listen(PORT,()=>console.log("server is running on", PORT))