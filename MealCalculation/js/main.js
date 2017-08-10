var mysetting={
  w:document.body.clientWidth
};
function run(){
  var main=$('<div></div>');
  main.attr("id","main");



  
  if(mysetting.w>640){
    var blackwrap=$('<div></div>');
    blackwrap.attr("id","blackwrap");
    main.appendTo(blackwrap);
    blackwrap.appendTo("body");
  }else{
    main.appendTo("body");
  }
}
