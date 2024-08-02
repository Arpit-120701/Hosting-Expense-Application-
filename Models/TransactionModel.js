const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
   userId:{
      type:String,
      required:true,
   },
    amount:{
        type:Number,
        required:[true,"amount is require"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    type:{
      type:String,
      required:[true,"Type is required"]
    },
     referrence:{
        type:String,
     },
     description:{
        type:String,
        required:[true,"Description of transation is require"]
     },
     date:{
        type:Date,
        required:[true,"Date  is required!!"]
     }
}, {timestamps:true})

const transactionModel = mongoose.model('transcations', transactionSchema)
module.exports= transactionModel;
