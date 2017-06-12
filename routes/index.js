let express=require("express");
let {Article}=require("../model/index");
let router=express.Router();
router.get("/",function(req,res){
    let keyword=req.body.search;
    let query={};
    if(keyword){
        query['$or'] = [{title:new RegExp(keyword)},
            {content:new RegExp(keyword)}];
    }
    Article.find(query).sort({createAt:-1}).populate('user').exec(function(err,articles){
        res.render("index",{
            title:"粘人吧",
            articles
        });
    })





});
module.exports=router;