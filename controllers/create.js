const user = require('../models/createschema');
const sendmessage = require('./sendmessage');


exports.create = async(req,res)=>{
    try{
      
        const{name , email , phone , subject , message} = req.body
        res.status(200).json({
          status:true,
          data:name,
          message:"We will contact you soon",
        })      
        await sendmessage(name , email , phone , subject , message)       
        
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            status:false,
            data:"internal server error",
            message:err.message,
          })
    }
}