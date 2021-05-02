const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


//port address
const PORT = process.env.PORT || 8070;

app.use(cors());



//call mongodb url
const URL = process.env.MONGODB_URL;

//DB options
mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify: false,
});

//DB connection
const connection = mongoose.connection;
connection.once("open", () =>{
 console.log("Databse Connected !");
})

//routes
const authRoutes = require('./src/routes/auth');
const adminRoutes = require('./src/routes/admin/auth');

app.use(bodyParser());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

//calling port
app.listen(PORT, () => {
    console.log(`Server running on port number:${PORT}`)
})





