let express=require("express");
let router=express.Router();
let multer=require("multer");
let uploads=multer({dest:"public/uploads"});
let {checkLogin,checkNotLogin}=require("../auth");
let {User}=require("../model/index");
router.get("/signup",checkNotLogin,function(req,res){
    res.render("user/signup",{title:"用户注册"});
});
router.post("/signup", uploads.single("avatar") ,function(req,res){
    let user=req.body;
    user.avatar=`uploads/${req.file.filename}`;
    console.log(uploads);
    User.create(user,function(err,doc){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/user/signin")
        }
    });
})
router.get("/signin",checkNotLogin,function(req,res){
    res.render("user/signin",{title:"用户登录"});
});
router.post("/signin",function(req,res){
    let user=req.body;
    User.findOne(user,function(err,doc){
        if(err){
            res.redirect("back");
        }else {
            if(doc){
                req.session.user=doc;
                res.redirect("/");
            }else{
                res.redirect("back");
            }
        }
    })
})
router.get("/signout",checkLogin,function(req,res){
    req.session.user=null;
    res.redirect("/");

});
module.exports=router;