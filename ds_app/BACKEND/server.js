
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//routes
const userRoutes = require('./src/routes/user');

//give port address
const PORT = process.env.PORT || 4000;


//call mongodb url
const URL = process.env.MONGODB_URL;




mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
});
//DB connection
const connection = mongoose.connection;
connection.once("open", () =>{
 console.log("Databse Connected !");
})
//calling port
app.listen(PORT, () => {
    console.log(`Server running on port number:${PORT}`)
})



app.use(cors());
app.use(bodyParser);
app.use('/user', userRoutes);

