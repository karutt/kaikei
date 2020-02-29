
// $('div').append('<p class="add">子要素pの後ろに追加しました。</p>');
stock_template = `
<div class="stock-body-panel-wrapper" id="ピザ">
  <div class="stock-body-panel-head">
    <div class="name">ピザ</div>
    <div class="time">time</div>
  </div>
  <div class="stock-body-panel-body">
    <div class="num">1</div>
    <div class="mult">×</div>
    <div class="value">200</div>
  </div>
</div>
`




$(".kaikei-item").on("mouseup", function() {
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
  console.log("not exist#"+name)
  }
})
