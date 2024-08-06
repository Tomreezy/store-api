const express =require("express")
const router = express.Router()
const {searchAll,createSearch} = require("../controllers/searchController")


router.route("/").get(searchAll).post(createSearch)

module.exports=router