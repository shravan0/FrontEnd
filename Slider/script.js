(function(){
  var pageWidth=$(".wrapper").outerWidth();;
 var panels=6,
     panelWidth=pageWidth-30,
     currentPanel=1,
     rotateAngle=0;

     for(var i=0;i<6;i++){
    $(".slider").append("<div style='width:"+pageWidth +"px;' class='slider-panel'>Panel "+ (i+1)+"</div>");
  $(".slider").css("width",panels*pageWidth+"px");
    $(".dots ul").append("<li data-slider-id="+ (i+1)+"></li>");
  }
    $(".dots ul li").unbind("click").on("click",controlCicked);
  $(".dots ul li:first").addClass("selected");
 
  
  function controlCicked(e){
    $(".dots ul li").removeClass(".selected").addClass("default");
    $(this).removeClass("default").addClass("selected");
    var clickedPanel=$(this).data("slider-id");
    if(currentPanel>clickedPanel){
      rotateAngle=rotateAngle+(currentPanel-clickedPanel)*pageWidth;
    
    currentPanel=clickedPanel;
    }
    else if(currentPanel<clickedPanel)
    {
      rotateAngle=rotateAngle-(clickedPanel-currentPanel)*pageWidth;
      currentPanel=clickedPanel;
    }
    if(currentPanel)
    
    var rotate="TranslateX("+ (rotateAngle)+"px)";
    $(".slider").css("transform",rotate).css("transition","all 1s");
  
  }
  $(window).on("resize",function(){
    pageWidth=$(".wrapper").outerWidth();
    
    $(".slider-panel").css("width",pageWidth+"px");
    
    $(".slider").css("width",pageWidth*panels+"px");
  });
})();