const express = require('express')
const app = express()
const port = 3000
require("./config");
app.use(express.json());
const Products= require("./Pruducts");


app.get("/search/:key" ,async (req,resp)=>{
    console.log(req.params.key);
    let data=await Products.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(data);
})


app.listen(port)
