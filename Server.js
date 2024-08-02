const express =  require('express')
const dotenv = require("dotenv")
const morgan =  require("morgan")
const colors = require("colors")
const cors = require("cors")
const connectDb = require('./Config/ConnectDb')
const path = require('path')

//config our files
dotenv.config()

//Database connection 
connectDb()

//rest object 
const app = express()

//middleware 
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes and API's
app.use('/api/v1/users', require("./Routers/userRoutes"))

//Routes for transaction
app.use('/api/v1/transactions', require('./Routers/transactionRoutes'))

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
const PORT = 8080 || process.env.PORT 

//listen server 
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})