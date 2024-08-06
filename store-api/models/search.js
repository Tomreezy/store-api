const mongoose = require("mongoose")

const ProductSearch = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"a product must have a name"],
        maxLength:[100,"the name cant be more than 100 characters"]
    },
    price:{
        type:Number,
        required:[true,"a product should have a price"]
    },
    category:{
        type:String,
        enum:{
            values:["children","men","women"],
            message: '{VALUE} is not supported',
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    size:{
        type:String,
        enum:{
            values:["sm","md","lg","xlg"],
            message: '{VALUE} is not supported',
        }
    },
    delivery:{
        type:Boolean,
        default:false
    }

})


module.exports=mongoose.model("Search",ProductSearch)