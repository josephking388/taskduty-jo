require("dotenv/config")
const express = require("express");
const app = express();
const port = 5500;
const mongoose = require("mongoose")
const connect = require('./config/db')

app.get('/',(req,res)=>{
    res.send('hellow world')

})


//server connection and D8
connect()
.then(()=>{
    try {

        app.listen(port,()=>{
            console.log(`server is running on http://localhost:${port}`);
        
        } )
    } catch (error) {

    } catch (error) {
        console.log("cannot connect to the server");
    }
})
.catch ((error)=>{
    console.log("invalid database connection..!",error);
}
)







app.get('/',(req,res)=>{
    res.send('hellow world')
})

