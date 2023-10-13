const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com")


const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const InsertInDB=async ()=>{
    const ProductModel=mongoose.model("products",ProductSchema);
    let data=new ProductModel({name:"oneplus 10",
        price:1280,
        brand:"Oneplus",
        category:"Mobile"
    });
    let result=await data.save();
    console.log(result);    
}

//InsertInDB();


const UpdateInDB= async ()=>{
    
    const ProductModel=mongoose.model("products",ProductSchema);
    let data= await ProductModel.updateOne(
        {name:"S 22"},
            {
                $set:{price:1200}
            }
    )
    console.log(data);
}

//UpdateInDB();

const DeleteInDB= async ()=>{
    
    const ProductModel=mongoose.model("products",ProductSchema);
    let data= await ProductModel.deleteOne(
        {name:"S 22"}
    )
    console.log(data);
}

//DeleteInDB();

const FindInDB= async ()=>{
    
    const ProductModel=mongoose.model("products",ProductSchema);
    let data= await ProductModel.find()
    console.log(data);
}

FindInDB();