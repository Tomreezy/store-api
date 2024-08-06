const express = require("express")
const app = express()
const connectDb = require("./db/connectDb")
const searchRoutes = require("./routes/search")
require("dotenv").config()
require("express-async-errors")
const errHandler=require("./middleware/error")
const cors = require("cors")

//start middleware 
app.use(express.json())
app.use(cors())


//middleware routes
app.use("/api/v1/search",searchRoutes)


//end middleware
app.use(errHandler)


//start server
const port= process.env.PORT || 3000

const start =async ()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`server is listening on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}

start()