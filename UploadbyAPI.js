const express = require('express')
const multer=require("multer");
const app = express()
const port = 3000

const uploads= multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"Uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+ Date.now()+".jpg")
        }
    })
}).array("user_file")

app.post("/upload",uploads,(req,resp)=>{
    resp.send("Hello file")
})

app.listen(port)
