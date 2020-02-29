

stock_template = (name, value)=> {
  start = new Date()
  console.log()
  start = start.getHours() + ":" + (String(start.getMinutes()).length < 2 ? "0"+start.getMinutes() :start.getMinutes() )
  return `<div class="stock-body-panel">
    <div class="stock-body-panel-wrapper" id="`+name+ `">
      <div class="stock-body-panel-head">
        <div class="name">`+name+`</div>
        <div class="time">`+start+`</div>
      </div>
      <div class="stock-body-panel-body">
        <div class="num">1</div>
        <div class="mult">×</div>
        <div class="value">`+value+`</div>
      </div>
    </div>
    <div class="stock-body-panel-remove">削除</div>
  </div>`}

$(".kaikei-item").on("click", function() {
  name = $(this).children(".name").html()
  value = $(this).children(".value").html()
  console.log(name, value)
  id = '#'+name
  if($(id).length) {
    num = Number($(id).children(".stock-body-panel-body").children(".num").html())+1
    $(id).children(".stock-body-panel-body").children(".num").html(num)
    $(id).stop().animate({'backgroundColor': '#e6f7ff'}, 250, function() {
      $(id).animate({'backgroundColor': '#ffffff'}, 250)
    });
  } else {
    $(".stock-body").append(stock_template(name, value))
  }
})
