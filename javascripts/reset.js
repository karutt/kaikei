$(".stock-body").on("click", ".stock-body-panel>.stock-body-panel-remove", function() {
  $(this).parent().fadeOut(100, function() {
    $(this).remove()
    calc_sum()
    console.log(window)
  })
})

$(".reset_btn").on("click", function() {
  $(".stock-body").fadeOut(100, function() {
    $(".stock-body").html("")
    $(".stock-body").css({display: "block"})
    calc_sum()
  })
})
