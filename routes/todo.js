const express = require("express");
const router = express.Router()

//import controller
const {createTodo} = require("../controller/createTodo");
const {deleteTodo} = require("../controller/deleteTodo");

//define API route

router.post("/createTodo",createTodo);
router.delete("/deleteTodo",deleteTodo);

module.exports= router;