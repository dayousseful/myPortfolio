const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const app = express()
const schemas = require('./models/Schemas')
const mongoose = require('mongoose')
require('dotenv/config')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
  origin: 'https://youssefhamdy.com',
  credentials: true,
  optionSuccessStatus: 200
}




app.use(cors(corsOptions))
app.use('/', router)


const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(()=> console.log('DB connected!'))
.catch(err => console.log(err))

app.post('/form', cors(corsOptions), async(req,res) => {
  const {name, email} = req.body
  const userData = {name: name, email : email}
  const newUser = new schemas.Users(userData)
  const saveUser = await newUser.save()
  if (saveUser){
    res.send(true)
  }
  res.end()
})

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
