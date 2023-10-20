const express = require('express')
const router = express.Router()
const schemas = require('../models/Schemas')


console.log('running')

// router.post('/form', async(req,res) => {
//   const {name, email} = req.body
//   const userData = {name: name, email : email}
//   const newUser = new schemas.Users(userData)
//   const saveUser = await newUser.save()
//   if (saveUser){
//     res.send(true)
//   }
//   res.end()
// })

router.get('/getReq',(req,res) => {
  res.send('ya mosahel el 7al ya rab')
})


module.exports = router