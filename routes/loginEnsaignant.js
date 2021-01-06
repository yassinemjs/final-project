const express=require('express')
const router =express.Router()

const jwt =require('jsonwebtoken')
const bcrypt= require('bcryptjs')
const {check,validationResult}=require('express-validator')
const config=require('config')
const Ensaignant=require('../models/Ensaigant')


//@http:://localhost:4000/api/prof/auth *post login *private
router.post('/auth',
[
  check('email','email is required').isEmail(),
  check('password','password is required').exists()    
],async(req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty()) { return res.status(400).send(error.array())}

        const {password,email}=req.body
    try {
           let prof= await Ensaignant.findOne({email})
           if(!prof) {return res.status(400).send([{msg:'Invalid Credentials'}])}
    
           const mdp = await bcrypt.compare(password,prof.password)
           if(!mdp) {return res.status(400).send([{msg:'Invalid Credentials'}])}

           const profile= await Ensaignant.findOne({_id:prof._id}).populate('grade').
           populate('level')
           
     const payload={
         user:{
             id:prof._id ,
         }
     }    
      jwt.sign(payload,config.get('tokenSecret'),
      (err,token)=>{
          if(err) res.status(400).send([{msg:err}])

          res.json({token,profile})
      })  


    } catch (err) {
        res.status(500).send([{msg:'server error'}])
    }

})



module.exports=router