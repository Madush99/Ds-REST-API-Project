
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();



//routes
const userRoutes = require('./routes/user');



//contants
const PORT = process.env.PORT || 8070;



const URL = process.env.MONGODB_URL;

//DB connection
mongoose.connect(URL,{
    
})



app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

