/*
 var nav=document.getElementById("nav");
 var lis=nav.getElementsByTagName("li");
 for(var i=0;i<lis.length;i++){
 lis[i].onmouseover=function(){
 this.className="cur";
 }
 lis[i].onmouseout=function(){
 this.className="";
 }
 }*/
var $lis=$("#nav li");
$lis.on("mouseover",$("li"),function(e){
    $(this).addClass("cur")
});
$lis.on("mouseout",$("li"),function(e){
    $(this).removeClass("cur")
});
