const transactionModel = require('../Models/TransactionModel')
const moment = require('moment')


const getAllTransaction= async(req , res)=>{
    try{
        const { frequency , selectedDate , type} = req.body;
        const transactions = await transactionModel.find({
           ...(frequency !== "custom"
            ? {
            date:{
                $gt: moment().subtract(Number(frequency), 'd').toDate(),
            },
           } :{
            date:{
                $gte : selectedDate[0],
                $lte: selectedDate[1],
            },
           }),
            userId: req.body.userId,
            ...(type !== "all" && { type }),
        });
        res.status(200).json(transactions);
    }

    catch(err)
    {
        console.log(err);
        res.status(400).json(err)
    }

}


const editTransaction = async(req, res)=>{
    try{
        await transactionModel.findOneAndUpdate({
             _id: req.body.transactionId}, 
            req.body.payload);
            res.status(200).send("Edit Successfully !!!")

    }
    catch(error)
    {
       res.status(500).json(error)
       console.log(error)
    }
}

const addTransation = async(req, res) => {
    try{
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send("Transaction Added successfully!! ")
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(error)
    }

}


const deleteTransaction = async(req, res) =>{
    try{
        await transactionModel.findOneAndDelete({
            _id : req.body.transactionId
        })
        res.status(200).send("Transaction Deleted !!")
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { getAllTransaction, addTransation, editTransaction, deleteTransaction }