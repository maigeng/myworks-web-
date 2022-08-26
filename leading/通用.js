var tabs=document.getElementById("tabs").getElementsByTagName("li")
console.log(tabs)
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists)
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}
var scr_top=document.documentElement.scrollTop
console.log(scr_top)

function showlist(){
    for(var i=0;i<tabs.length;i++){
       if(tabs[i]===this){
        tabs[i].className="active";
        lists[i].className="clearfix active"
       }
       else{
           tabs[i].className=""
           lists[i].className="clearfix"
       }
    }
}
var seckillNav=document.getElementById("seckillNav")

window.onscroll=function () {
    var scrolltop=document.documentElement.scrollTop;
    if(scrolltop>=260){
        seckillNav.className="seckill-nav seckill-navfixed"
    }
    else{seckillNav.className="seckill-nav"}
    console.log(scrolltop)
}
