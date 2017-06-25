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
var $up=$(".up");
var $down=$(".down");
$up.each(function(index,item){
    item.flag=true;
    $(item).click(function(){
        if(this.flag){
            $(this).children("span").html(parseInt($(this).children("span").html())+1);
            this.flag=false;
            $.ajax({
                type: 'POST',
                url: "/upcount",
                data: {_id:$(this).parents(".article")[0].id}
            });
        }
    });
});
$down.each(function(index,item){
    item.flag=true;
    $(item).click(function(){
        if(this.flag){
            $(this).children("span").html(parseInt($(this).children("span").html())+1);
            this.flag=false;
            $.ajax({
                type: 'POST',
                url: "/downcount",
                data: {_id:$(this).parents(".article")[0].id}
            });
        }
    });
});