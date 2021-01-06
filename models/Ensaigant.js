const mongoose=require('mongoose')


const EnsaignatSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true ,
    },
    lastName:{
        type:String,
        required:true ,
    },
    dateDeNaissance: {
        type:String,
       

    },
    adresse:{
        type :String,
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
        required:true ,
    },
    etatCivil:{
        type:String,
    },
    enfant:{
        type:Number,
    },
    dateDeRecrutement:{
        type:String ,
       
    },
    grade:{
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'grades',
     
    },
    level:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'levels'
    },
    situation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'situation'
    },
    speciality:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'specialitys'
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now ,
    }


})


module.exports=mongoose.model('ensaignants',EnsaignatSchema)