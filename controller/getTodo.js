const  Todo= require("../model/Todo");

//route handler

exports.getTodo = async(req,res) =>{
    try{
          //fetch all todo items from database
          const todos = await Todo.find({});
          
          //response
          res.status(200)
          .json({
            success:true,
            data:todos,
            message:"Entire Todo Data Fetched",
          })
    }
    catch(err){
          console.error(err);
          res.status(500)
          .json({
            success:false,
            error:err.message,
            message:"server ke andar gadbid "
          })
    }

}

exports.getTodoById= async(req,res) =>{
    try{
         //extract todo items basis on id
         const id= req.params.id;
         const todo = await Todo.findById({_id:id})

         //data for given id not found
         if(!todo){
            return res.status(400).json({
                success:false,
                message:"No Data Found With Given ID",
            })
         }

         //DATA FOr given id found in DB
         res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`,
         })

    
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