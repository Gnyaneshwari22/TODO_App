const express = require("express");
const router = express.Router()

//import controller
const {createTodo} = require("../controller/createTodo");
const {deleteTodo} = require("../controller/deleteTodo");
const {getTodo,getTodoById} = require("../controller/getTodo");

//define API route

router.post("/createTodo",createTodo);
router.delete("/deleteTodo",deleteTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
module.exports= router;