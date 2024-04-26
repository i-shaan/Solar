const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = "mongodb://localhost:27017/solar"
console.log(mongoURI)
const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected to database")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;