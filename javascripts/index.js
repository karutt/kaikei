


mouseX = 0
mousedown = false
$('body').on("mousemove", (e)=> {
  if(mousedown) {
    d = mouseX - e.pageX

    if($('.stock-body-panel').hasClass("open")) {
      if(-60<=d && d<=0) {
        $('.stock-body-panel').css({right:  d+60+'px'});
      } else if (d<-60) {
        $('.stock-body-panel').css({right:  0+'px'});
      } else {
        $('.stock-body-panel').css({right:  60+'px'});
      }
    } else {
      if(0<=d && d<=60) {
        $('.stock-body-panel').css({right:  d+'px'});
      } else if(d>60) {
        $('.stock-body-panel').css({right:  60+'px'});
      } else {
        $('.stock-body-panel').css({right:  0+'px'});
      }

    }
  }
})


$('.stock-body-panel').mousedown(function(e){
  mouseX = e.pageX
  mousedown = true
})

$("body").mouseup(function(e){
  if(mousedown) {
  if($('.stock-body-panel').hasClass("open")) {

      $('.stock-body-panel').animate({right: '0px'}, 30);
      $('.stock-body-panel').removeClass("open")


  } else {
    if (mouseX - e.pageX < 20) {
      $('.stock-body-panel').animate({right: '0px'}, 30);
    } else {
      $('.stock-body-panel').animate({right: '60px'}, 30);
      $('.stock-body-panel').addClass("open")
    }
  }
  mousedown = false
  }
})
