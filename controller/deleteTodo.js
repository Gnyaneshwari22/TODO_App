//import the model

const Todo= require("../model/Todo");

//route handler

exports.deleteTodo = async(req,res) =>{
      try{
            
              const id= req.params.id;
         

             await Todo.findByIdAndDelete({_id:id});

            //send a json response with success flag

            res.json(
                {
                    success:true,
                    
                    message:`Entry deleted Successfully ${id}`
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

