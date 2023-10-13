const express = require('express')
const app = express()
const port = 3000
require("./config");
app.use(express.json());
const Products= require("./Pruducts");

app.post('/create',async (req, res) => {
    let data=Products(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send(result);
})

app.get('/list',async (req, res) => {
    let data= await Products.find();
    console.log(data);
    res.send(data);
})

app.delete('/delete/:_id',async (req, res) => {
    console.log(req.params);
    let data= await Products.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id',async (req, res) => {
    console.log(req.params);
    let data= await Products.updateOne(
        req.params,
            { $set : req.body}
    );
    res.send(data);
})

app.listen(port)