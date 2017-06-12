let express=require("express");
let router=express.Router();
let multer=require("multer");
let uploads=multer({dest:"public/uploads"});
let {checkLogin,checkNotLogin}=require("../auth");
let {Article}=require("../model/index");
router.get("/add",checkLogin,function(req,res){
    res.render("article/add",{title:"发布笑话"})
});
router.post("/add",uploads.single("photo"),function(req,res){
    let article=req.body;
    article.user = req.session.user._id;
    article.photo=req.file?`uploads/${req.file.filename}`:null;
    article.createAt=Date.now();
    Article.create(article,function(err,doc){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
})
module.exports=router;