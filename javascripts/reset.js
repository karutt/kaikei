$(".stock-body").on("click", ".stock-body-panel>.stock-body-panel-remove", function() {
  $(this).parent().remove()
  calc_sum()
})

$(".reset_btn").on("click", function() {
  $(".stock-body").html("")
  $(".stock-body").css({display: "block"})
  calc_sum()
})
