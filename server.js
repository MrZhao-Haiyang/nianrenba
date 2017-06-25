let express =require("express");
let path=require("path");
let bodyParser=require("body-parser");
let session=require("express-session");
let MongoStore = require('connect-mongo')(session);
let {Article}=require("./model/index");
let app=express();

//设置模板引擎
app.set("view engine","html");
app.set("views",path.resolve("views"));
app.engine("html",require("ejs").__express);

//静态文件
app.use(express.static(path.resolve("node_modules")));
app.use(express.static(path.resolve("public")));

app.use(session({
    resave:true,
    secret:"nianrenba",
    cookie:{
        maxAge:3600*1000
    },
    saveUninitialized:true,
    store:new MongoStore({
        url:require('./config').dbUrl
    })
}));
app.use(bodyParser.urlencoded({extended:true}))
let index=require("./routes/index");
let article=require("./routes/article");
let user=require("./routes/user");
app.use(function(req,res,next){
    res.locals.user=req.session.user;
    next();
})
app.use("/",index);
app.use("/article",article);
app.use("/user",user);
app.post("/upcount",function(req,res){
    Article.findOne(req.body,function(err,doc){
       if(err){
           console.log(err);
       }else {
           let curUp=doc.up+1;
           Article.update(req.body,{up : curUp },function(err){
               if (err){
                   console.log(err);
               }
           });
       }
    })
});
app.post("/downcount",function(req,res){
    Article.findOne(req.body,function(err,doc){
        if(err){
            console.log(err);
        }else {
            let curUp=doc.down+1;
            Article.update(req.body,{down : curUp },function(err){
                if (err){
                    console.log(err);
                }
            });
        }
    })
});
app.listen(3000);