

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
    $(".menu-item .name").html("未設定")
    $(".menu-item .value").html("0")
  }
})

$(".edit_area-remove_btn").on("click",  function() {
  target = $(".menu-item:last")
  if($(".menu-item").length > 1) {
    target.stop().fadeOut(50).animate({'height': '0','fontSize': '0', 'pading': '0', 'margin': '0'},
    { duration: 50, queue: false, easing: 'easeOutCubic', complete: function(){target.remove()}});
  } else {
    $(".menu-item .name").html("未設定")
    $(".menu-item .value").html("0")
  }
})
