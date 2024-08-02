const express =  require('express')
const { addTransation, getAllTransaction , editTransaction ,deleteTransaction } = require('../Controllers/transactionCtrl')

//declaring router object 
const router = express.Router()


//routers 
router.post('/add-transaction' , addTransation )

router.post('/edit-transaction' , editTransaction )

router.post('/delete-transaction' , deleteTransaction )

router.post('/get-transaction', getAllTransaction )


module.exports = router ;