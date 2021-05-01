
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//routes
const userRoutes = require('D:/Ds-REST-API-Project/ds_app/BACKEND/src/routes/user');

const PORT = process.env.PORT || 4000;



const URL = process.env.MONGODB_URL;



//DB connection
mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open", () =>{
 console.log("Databse Connected !");
})

app.listen(PORT, () => {
    console.log(`Server running on port number:${PORT}`)
})



app.use(cors());
app.use(bodyParser);
app.use('/user', userRoutes);

