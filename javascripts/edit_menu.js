
// sortableの設定
$('.menu-body-list').sortable({
  cursor: "move",
  opacity: 0.7,
  placeholder: "menu-placeholder",
  distance: 5,
});
$('.menu-body-list').sortable("disable")
set_sortable = (on) => $('.menu-body-list').sortable(on ? "enable": "disable")

// editボタンをクリック
edit_mode = false
$(".menu-edit-add_btn, .menu-edit-remove_btn").fadeOut(0)
$(".menu-edit-body").on("click", function() {
  if(edit_mode) {
    // edit_mode オフ
    set_sortable(false)
    $(".menu-body-list").removeClass("edit_mode")
    $(".menu-body").stop().animate({'backgroundColor': '#ffffff'}, 100, "easeOutCubic")
    $(".edit_css .name, .edit_css .value").css({'width': 'auto'})
    $(".trash").fadeOut(10)
    $(".menu-edit-add_btn, .menu-edit-remove_btn").fadeOut(10)
    $(".menu-edit-body").stop().animate({'borderLeftWidth': '0px'}, 100, "easeOutCubic")
    $(".menu-body-list-item").removeClass("edit_css")
  } else {
    // edit_mode オン
    $(".stock-body-panel").remove()
    $(".sum_num, .sum_value").html("0")
    $(".menu-body-list-item").addClass("edit_css")
    $(".edit_css .name, .edit_css .value").stop().animate({'width': '45%'}, 100, "easeOutCubic")
    $(".trash").fadeIn(100)
    $(".menu-edit-add_btn, .menu-edit-remove_btn").fadeIn(100)
    $(".menu-body").stop().animate({'backgroundColor': '#f7f7f7'}, 100, "easeOutCubic")
    $(".menu-edit-body").stop().animate({'borderLeftWidth': '15px'}, 100, "easeOutCubic")
    $(".menu-body-list").addClass("edit_mode")
    set_sortable(true)
  }
  edit_mode = !edit_mode
})

// テキストの編集
edit_text = function(parent, child) {

  $(parent).on("click", child, function(){
    if($(".menu-body-list").hasClass("edit_mode")) {
      if(!$(this).hasClass('on')){
        $(this).addClass('on');
        const txt = $(this).text();
        $(this).html('<input type="text" class="edit_input" value="'+txt+'" />');
        $("input.edit_input").focus()
      }
    }
  });

  $(parent).on('keypress', child, "input.edit_input:focus", function(e){
    if($(".menu-body-list").hasClass("edit_mode")) {
      if ( e.which == 13 ) {$(this).children("input")[0].blur()}
    }
  });

  $(parent).on('blur', child, "input.edit_input", function(){
    if($(".menu-body-list").hasClass("edit_mode")) {
      text = $(this).children("input").val()
      console.log(text)
      $(this).removeClass("on")
      $(this).html(text)
    }
  });

}
edit_text(".menu-body-list", ".menu-body-list-item .name, .menu-body-list-item .value")
