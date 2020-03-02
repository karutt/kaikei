
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
