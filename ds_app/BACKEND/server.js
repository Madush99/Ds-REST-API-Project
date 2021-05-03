const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();


//port address
const PORT = process.env.PORT || 8070;


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
const categoryRoutes = require('./src/routes/category');
const productRoutes = require('./src/routes/product');


app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

//calling port
app.listen(PORT, () => {
    console.log(`Server running on port number:${PORT}`)
})





