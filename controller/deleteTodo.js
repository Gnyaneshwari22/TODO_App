//import the model

const Todo= require("../model/Todo");

//route handler

exports.deleteTodo = async(req,res) =>{
      try{
            //extract title and discription from request body 
            const {title,description}= req.body;

            //create a new Todo object and insert in DB

            const response =await Todo.deleteOne({title,description});

            //send a json response with success flag

            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entry deleted Successfully"
                }
            );
      }
      catch(err){

          console.error(err);
          console.log(err);
          res.status(500)
          .json({
            success:false,
            data:"internal server error",
            message:err.message,
          })

      }

}