const express =require("express")
const mongoDB = require("./db")
const app = express()
const port=5000
const cors=require('cors')

mongoDB()

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept",
    );
    next()
})

app.use(cors())
app.use(express.json())
app.use("/api",require("./Routes/CreateUser"))
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))

// app.get("/",(req,res)=>{
//     res.send("Hellodouble World")
// })

// const path=require('path')

//     app.get('/',(req,res)=>{
//         app.use(express.static(path.resolve(__dirname,'frontend','build')))
//         res.send(path.resolve(__dirname,'frontend','build','index.html'))
//     })

// if(process.env.NODE_ENV=='production'){
    const path=require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'build')))
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
// }

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})