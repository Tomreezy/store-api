
const Search = require("../models/search")

const searchAll = async (req,res)=>{
    
    const queryObj={}

    const{name,price,size,category,delivery,sort,fields}=req.query

    if(size){
        queryObj.size=size
    }

    if(name){
        queryObj.name={$regex:name,$options:"i"}
    }

    if(price){
        queryObj.price=price
    }

    if(category){
        queryObj.category=category
    }

    if(delivery){
        queryObj.delivery= delivery==="true"?true:false
    }
    
    let result = Search.find(queryObj)

    if(fields){
        const selected= fields.split(",").join(" ")
        result=result.select(selected)
    }

    if(sort){
        const sorted= sort.split(",").join(" ")
        result.sort(sorted)
    }else{
        result=result.sort("createdAt")
    }

    

    const filteredProducts = await result


    res.status(200).json({numHits:filteredProducts.length,data:filteredProducts})
}

const createSearch = async (req,res)=>{

    console.log(req.body)
    
    const product = await Search.create(req.body)

    res.status(201).json({data:"what ahppeneing",data2:req.body})
}

module.exports={searchAll,createSearch}