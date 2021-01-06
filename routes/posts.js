const express=require('express')
const router= express.Router()

const {check,validationResult}=require('express-validator')
const Posts=require('../models/Posts') 
const Ensaignant=require('../models/Ensaigant')
const auth=require('../middleware/authAdmin')

//@ http://localhost:4000/api/post  *add post *private
router.post('/',[
auth,[
    check('text','enter your text').not().isEmpty()
],async(req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty())  { return res.status(400).send(error.array())}
      const {text}=req.body
    try {
        const prof =await  Ensaignant.findOne({_id:req.user.id})
        
          const newPost= new Posts({
              text,
              user:req.user.id,
              name:prof.name
          })

          await newPost.save()
          res.send(newPost)
          
        
    } catch (err) {
         res.status(500).send([{msg:'server error'}])
    }
}
])

//@ http://localhost:4000/api/post/ *add comment *private
router.post('/:id',[auth,
[
   check('text','enter your comment').not().isEmpty()
],async(req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty()) { return res.status(400).send(error.array())}
    const { id }=req.params;
    const{text}=req.body
   try {
       const post= await Posts.findById(id)
       if(!post) { return res.status(400).send([{msg:'post not found'}])}
          const prof= await Ensaignant.findById(req.user.id)
                 const newComment={
                     text,
                     user:req.user.id,
                     name:prof.name,
                 }             
       post.comment.unshift(newComment)
        await post.save()
        res.send(post)
       
   } catch (err) {

       res.status(500).send([{msg:'server error'}])
   }
}
])



module.exports=router
