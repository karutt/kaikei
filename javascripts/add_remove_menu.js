

add_count = 1
$(".menu-edit-add_btn").on("click", function() {
  $(".menu-body-list-item:last").clone().appendTo('.menu-body-list');
  $(".menu-body-list-item:last .name").html("名称未設定"+add_count)
  $(".menu-body-list-item:last .value").html("0")
  $(".menu-body-list-item:last .value").css({display: "block"})
  add_count += 1
})

$(".menu-body-list").on("click", ".trash", function() {

  if($(".menu-body-list-item").length > 1) {
    $(this).parent().stop().fadeOut(150).animate({'height': '0','fontSize': '0', 'pading': '0', 'margin': '0'},
    { duration: 150, queue: false, easing: 'easeOutCubic', complete: function(){$(this).remove()}});
  } else {
    // $(".menu-body-list-item .name").html("名称未設定")
    // $(".menu-body-list-item .value").html("0")
  }
})

$(".menu-edit-remove_btn").on("click",  function() {
  target = $(".menu-body-list-item:last")
  if($(".menu-body-list-item").length > 1) {
    target.stop().fadeOut(50).animate({'height': '0','fontSize': '0', 'pading': '0', 'margin': '0'},
    { duration: 50, queue: false, easing: 'easeOutCubic', complete: function(){target.remove()}});
  } else {
    // $(".menu-body-list-item .name").html("未設定")
    // $(".menu-body-list-item .value").html("0")
  }
})
