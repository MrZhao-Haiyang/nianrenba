let mongoose=require("mongoose");
mongoose.connect(require('../config').dbUrl);
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
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    up:{type:Number,default:0},
    down:{type:Number,default:0}
})
let Article=mongoose.model("Article",articleSchema);
module.exports.User=User;
module.exports.Article=Article;