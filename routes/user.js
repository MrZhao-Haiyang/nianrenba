let express=require("express");
let router=express.Router();
router.get("/signup",function(req,res){
    res.send("signUp")
});
router.get("/signin",function(req,res){
    res.send("signIn")
});
router.get("/signout",function(req,res){
    res.send("signOut")
});
module.exports=router;