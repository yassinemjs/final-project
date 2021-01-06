const express= require ('express')
const router =express.Router()

const {check,validationResult}= require ('express-validator');
const config=require('config')
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')

const authAdmin=require('../middleware/authAdmin');
const Ensaigant = require('../models/Ensaigant');

//@ http://localhost:4000/api/prof *post prof  * private
router.post('/',[
  authAdmin,
  [
      check('name','name is required').not().isEmpty(),
      check('lastName','last  name is required').not().isEmpty(),
      //check('dateDeNaissance','dateDeNaissance is required').not().isEmpty(), 
      check('email','eamil is required').isEmail(),
      check('grade','grade is required').not().isEmpty(),
      check('level','level is required').not().isEmpty(), 
      check('password','password is require minimum 6 character').isLength({min:6})
  ]
],async(req,res)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){ return res.status(400).send(error.array())}
    const {name,lastName,dateDeNaissance,email,grade,level,password}=req.body
    try {
           let prof= await Ensaigant.findOne({email});
           if(prof) { return res.status(400).send([{msg:'email has already exist'}])}

           prof=new Ensaigant({name,lastName,dateDeNaissance,email,grade,level,password})

            const salt = await bcrypt.genSalt(10)
            prof.password= await bcrypt.hash(password,salt)  

            await prof.save() 

        const payload={
         user:{
           id:prof.id
         }
       } 

        jwt.sign(payload,config.get('tokenSecret'),
        (err,token)=>{
         if(err) res.send(err)
         res.json({token})
       }) 
      
    } catch (err) {
      res.status(500).send([{msg:'server error'}])
    }


})


//@ http://localhost:4000/api/prof  *edit prof by admin and prof *private
router.put('/:_id',authAdmin,async(req,res)=>{
  const{_id}=req.params
    const editProf=req.body
    try {
        let prof= await Ensaigant.findById({_id})
        if(!prof) { return res.status(400).send([{ms:'ensaignat not found'}])}
        
        prof=await Ensaigant.findOneAndUpdate({_id},{$set:editProf})
         
        await prof.save()

         res.send(prof)
        

    } catch (err) {
    if(err.kind=='ObjectId'){
      return res.status(500).send([{msg:'ensaignat not found'}])
    }
    
    }
    })
    
    
//@ http://localhost:4000/api/prof/all  *edit prof by admin and prof *private
router.get('/all',authAdmin, async (req,res)=>{
   try {
          const profs= await Ensaigant.find().select('-password').sort({date:-1})
          .populate('grade') .populate('level')
          res.send(profs)

     
   } catch (err) {
      res.status(500).send([{msg:'server error'}])
   }

})    





module.exports=router