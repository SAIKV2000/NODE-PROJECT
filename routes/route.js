const express = require ("express")
const router = express.Router()

router.get("/test-me",function(req,res){
    res.send("my firsteverapi")
})

module.exports = router