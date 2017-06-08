let express =require("express");
let app=express();





let index=require("./routes/index");
let article=require("./routes/article");
let user=require("./routes/user");
app.use("/",index);
app.use("/article",article);
app.use("/user",user);
app.listen(3000);