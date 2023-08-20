
//serverb instantiation
const express = require("express");
const app= express();


//load config from env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middle ware body to parese json body

app.use(express.json());

//import routes for TODO api

const todoRoutes= require("./routes/todo");

//mount the todo API route
app.use("/api/v1",todoRoutes);
app.use("/api/v1",todoRoutes);

//start the server

app.listen(PORT, () =>{
    console.log(`server has been started at port  ${PORT}`);

})

//DB connextcion

const dbConnect= require("./config/DataBase");

dbConnect();

//default route creation

app.get("/",(req,res) => {
    res.send(`<h1>This is HOMEPAGE bhai</h1>`);
}
)

app.get("/api/v1",(req,res) => {
    res.send(`<h1>This is GET request wala page bhai</h1>`);
    
}
)


