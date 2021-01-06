const mongoose=require('mongoose')



const PostSchema = new mongoose.Schema({
  
    text:{
        type:String,
        required:true ,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ensaignants',
    },
    name:{
        type:String,
        required:true,
    },
    comment:[
        {
            text:{
                type:String,
              
            },
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'ensaignants',
            },
            name:{
                type:String,
               
            }
        }
    ],
    like:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'ensaignants',
            }
        }
    ]

}) 


module.exports=mongoose.model('posts',PostSchema)