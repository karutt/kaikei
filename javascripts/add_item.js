

stock_template = (name, value)=> {
  start = new Date()

  start = start.getHours() + ":" + (String(start.getMinutes()).length < 2 ? "0"+start.getMinutes() :start.getMinutes() )
  return `<div class="stock-body-panel">
  <div class="stock-body-panel-wrapper" id="`+name+ `">
  <div class="stock-body-panel-head">
  <div class="name">`+name+`</div>
  <div class="time">`+start+`</div>
  </div>
  <div class="stock-body-panel-body">
  <div class="num">1</div>
  <div class="mult">×</div>
  <div class="value">`+value+`</div>
  </div>
  </div>
  <div class="stock-body-panel-remove">削除</div>
  </div>`
}

$("body").click(function() {
  if($(".stock-body-panel").length > 0) {
    $(".payment-btn").addClass("payment-btn-active")
  } else {
    $(".payment-btn").removeClass("payment-btn-active")
  }
})

$(".menu-body-list").on("click", ".menu-body-list-item", function() {
  if(!$(".menu-body-list").hasClass("edit_mode")) {

    name = $(this).children(".name").html()
    value = $(this).children(".value").html()
    id = '#'+name
    if($(id).length) {
      num = Number($(id).children(".stock-body-panel-body").children(".num").html())+1
      $(id).children(".stock-body-panel-body").children(".num").html(num)
      $(id).stop().animate({'backgroundColor': '#e6f7ff'}, 250, function() {
        $(id).animate({'backgroundColor': '#ffffff'}, 250)
      });
    } else {
      $(".stock-body").append(stock_template(name, value))
      $(id).stop().animate({'backgroundColor': '#e6f7ff'}, 0, function() {
        $(id).animate({'backgroundColor': '#ffffff'}, 500)
      });
    }
    calc_sum()
  }
})

// メニューリストからリストアイテムがはみ出てもスクロールできるように高さを指定
$(".menu-body").css({height: $(".menu-edit").height()+"px"})
