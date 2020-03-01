
// sortableの設定
$('.kaikei').sortable({
  cursor: "move",
  opacity: 0.7,
  placeholder: "kaikei-placeholder",
});
$('.kaikei').sortable("disable")
set_sortable = (on) => $('.kaikei').sortable(on ? "enable": "disable")

// editボタンをクリック
edit_mode = false
$(".edit_area-body").on("click", function() {
  if(edit_mode) {
    // edit_mode オフ
    set_sortable(false)
    $(".kaikei").removeClass("edit_mode")
    $(".kaikei-item").removeClass("edit_css")
  } else {
    // edit_mode オン
    $(".stock-body-panel").remove()
    $(".kaikei-item").addClass("edit_css")
    $(".kaikei").addClass("edit_mode")
    set_sortable(true)
  }
  edit_mode = !edit_mode
})

// テキストの編集
edit_text = function(selector) {

  $(selector).click(function(){
    if($(".kaikei").hasClass("edit_mode")) {
      if(!$(this).hasClass('on')){
        $(this).addClass('on');
        const txt = $(this).text();
        $(this).html('<input type="text" class="edit_input" value="'+txt+'" />');
        $("input.edit_input").focus()
      }
    }
  });

  $(selector).on('keypress', "input.edit_input:focus", function(e){
    if($(".kaikei").hasClass("edit_mode")) {
      if ( e.which == 13 ) {$(this)[0].blur()}
    }
  });

  $(selector).on('blur', "input.edit_input", function(){
    if($(".kaikei").hasClass("edit_mode")) {
      text = $(this).val()
      $(this).parent().removeClass("on")
      $(this).parent().html(text)
    }
  });

}
edit_text(".kaikei-item .name, .kaikei-item .value")
