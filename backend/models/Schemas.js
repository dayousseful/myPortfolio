const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type:String, required:true},
    email:{type:String, required:true} ,
    entryDate: {type:Date , default:Date.now}
})


const Users = mongoose.model('Users', userSchema, 'users')
const mySchemas = {'Users':Users}

module.exports = mySchemas