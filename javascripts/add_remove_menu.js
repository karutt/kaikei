

$(".edit_area-add_btn").on("click", function() {
  console.log($(".menu-item:last"))
  $(".menu-item:last").clone().appendTo('.menu');
  $(".menu-item:last .name").html("未設定")
  $(".menu-item:last .value").html("0")
  $(".menu-item:last .value").css({display: "block"})
})

$(".menu").on("click", ".trash", function() {
  if($(".menu-item").length > 1) {
    $(this).parent().stop().fadeOut(150).animate({'height': '0','fontSize': '0', 'pading': '0', 'margin': '0'},
    { duration: 150, queue: false, easing: 'easeOutCubic', complete: function(){$(this).remove()}});
  } else {
    alert("メニューの数を０個にはできません。")
  }
})
