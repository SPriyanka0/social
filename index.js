const express = require("express");
const app = express();
const mongoose = require("mongoose"); //for database
const dotenv = require("dotenv"); //for environmental variables and .env 
const helmet = require("helmet"); //helps secure http header for the express app
const morgan = require("morgan"); // logs the requests along with some other information depending upon its configuration and the preset used
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth"); //for login...
dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    ()=>{
        console.log("vibing with MongoDB")
    }
    );

    //middleware
    app.use(express.json()) ;
    app.use(helmet());
    app.use(morgan("common"));

    app.use("/api/users", userRoute);
    app.use("/api/auth", authRoute);

app.listen(8800,()=>{
    console.log("backend is vibing and ready to go");
});