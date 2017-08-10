var mysetting={
  w:document.body.clientWidth,
  h:document.body.clientHeight,
  siteurl:window.location.host,
  person:{
    0:"郑守冲",
    1:"袁翰文",
    2:"区大俊",
    3:"帅游",
    4:"潘诗敏",
    5:"叶韵滢",
    6:"黄科",
  },
  head: document.head || document.getElementsByTagName('head')[0],
  main:$("#main"),
  click:function(){
    if(!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)||!!navigator.userAgent.match(/AppleWebKit/)){
      return "touchend"
    }else{
      return "click"
    }
  }()
};
var select={};
var personlen=0;
function run(){

  var main=$('<div></div>');
  main.attr("id","main");
  var css=document.createElement("style");
  css.type="text/css";
  css.setAttribute("id","css");
  var $css="";
  var $str="";
  $css+=".item{transform:translateY("+mysetting.h+"px)}"
  $.each(mysetting.person,function(i,j){
    $css+=".run .item:nth-child("+(Number(i)+1)+"){ transform:translateY(0); transition:all 0.3s ease-in-out "+Number(i)+"00ms} ";
    $str+="<div class='item'>"+j+"</div>";
    personlen++;
  });
  $css+=".run .item:nth-child("+(personlen+1)+"){ transform:translateY(0); transition:all 0.3s ease-in-out "+(personlen+1)+"00ms} ";
  $str+="<div class='item addItem'>+</div>";
  if(css.styleSheet){         //ie下
    css.styleSheet.cssText = $css;
  } else {
    css.innerHTML = $css;       //或者写成 nod.appendChild(document.createTextNode(str))
  }
  mysetting.head.appendChild(css);
  mysetting.main.html($str);
}
$("body").on(mysetting.click,"#main .item:not('.addItem')",function(){
  $(this).addClass("select");
});
$("body").on(mysetting.click,"#main .addItem",function(){
  console.log(2);
});
