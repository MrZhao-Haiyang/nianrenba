let express =require("express");
let path=require("path");
let bodyParser=require("body-parser");
let session=require("express-session");
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
    saveUninitialized:true
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
app.listen(3000);