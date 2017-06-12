let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/nianrenba");
let userSchema=new mongoose.Schema({
    username:String,
    password:String,
    avatar:String
});
let User=mongoose.model("User",userSchema);
let articleSchema=new mongoose.Schema({
    title:String,
    content:String,
    photo:String,
    tag:String,
    createAt:{type:String,default:Date.now()},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
let Article=mongoose.model("Article",articleSchema);
module.exports.User=User;
module.exports.Article=Article;