time = 300
$(".close-btn").on("click", function() {
  $(".cover").stop().fadeOut(time)
  $(".payment").stop().fadeOut(time+100).animate({'top': '100%'}, { duration: time, queue: false, easing: 'easeOutCubic'});
})

$(".payment-btn").on("click", function() {
  $(".cover").stop().fadeIn(time-200)
  $(".payment").stop().fadeIn(time+100).animate({'top': '1.5%'}, { duration: time, queue: false, easing: 'easeOutCubic'});
})
