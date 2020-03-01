tab_event = (down, move, up) => {

  mouseX = 0
  mousedown = false
  target = 0

  $('.stock-body').on(move, ".stock-body-panel", function(e) {
    if(mousedown) {
      d = (mouseX - e.pageX)
      if($(this).hasClass("open")) {
        if(-60<=d && d<=0) {
          $(target).css({right:  d+60+'px'});
        } else if (d<-60) {
          $(target).css({right:  0+'px'});
        } else {
          $(target).css({right:  60+'px'});
        }
      } else {
        if(0<=d && d<=60) {
          $(target).css({right:  d+'px'});
        } else if(d>60) {
          $(target).css({right:  60+'px'});
        } else {
          $(target).css({right:  0+'px'});
        }
      }
    }
  })

  $('.stock-body').on(down, ".stock-body-panel", function(e) {
    mouseX = e.pageX
    mousedown = true
    target = this
    $(target).css({right:  0+'px'});
  })

  $("body").on(up, (e)=> {
    if(mousedown) {
      if($(target).hasClass("open")) {

        $(target).css({right: '0px'});
        $(target).removeClass("open")

      } else {
        if (mouseX - e.pageX < 20) {
          $(target).css({right: '0px'});
        } else {
          $(target).css({right: '60px'});
          $(target).addClass("open")
        }
      }
      mousedown = false
    }
  })
}

tab_event("mousedown", "mousemove", "mouseup")
tab_event("touchstart", "touchmove", "touchend")
