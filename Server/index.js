const express = require('express')
const dotenv = require('dotenv')
const cors= require('cors')
dotenv.config()
const app = express() 
app.get('/', (req, res)=> {
    res.send("<center><h1>Hello from the server!</h1></center>");  // returns a simple string when accessed via http://localhost:5000/
})

app.listen(process.env.PORT || 5000,()=>console.log(`Port: ${process.env.PORT}`))