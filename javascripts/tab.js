
$("a.label").click(()=> false)
$(".tab_area_wrapper .label").click(function() {
  if(!$(this).hasClass("active")) {
    $(".tab_area_wrapper .active").removeClass("active")
    $(this).addClass("active")
    $(".panel_area .show").removeClass("show")
    $("#"+$(this).attr("href")).addClass("show")
  }
})
