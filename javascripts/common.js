window.calc_sum = function() {
  sum_num = 0
  sum_value = 0
  $(".stock-body-panel-body").each(function(index, element) {
    num = Number($(this).children(".num").html())
    sum_num += num
    value = num * Number($(this).children(".value").html())
    sum_value += value
  })
  $(".stock-foot > .sum_num").html(sum_num)
  $(".stock-foot > .sum_value").html(addcomma(sum_value))
}

window.addcomma = function(str) {
  wnum = new String(str).replace(/,/g, "");
  while(wnum != (wnum = wnum.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
  return wnum
}

window.removecomma = function(str) {
  return Number(String(str).replace( /,/g , "" ))
}

document.addEventListener('touchend', function (event) {
  event.preventDefault();
  $(event.target).trigger('click');
}, false);

window.stock_template = (name, value)=> {
  start = new Date()

  start = start.getHours() + ":" + (String(start.getMinutes()).length < 2 ? "0"+start.getMinutes() :start.getMinutes() )
  return `<div class="stock-body-panel">
  <div class="stock-body-panel-wrapper" id="`+name+ `">
  <div class="stock-body-panel-head">
  <div class="name">`+name.slice(1)+`</div>
  <div class="time">`+start+`</div>
  </div>
  <div class="stock-body-panel-body">
  <div class="num">1</div>
  <div class="mult">×</div>
  <div class="value">`+value+`</div>
  </div>
  </div>
  <div class="stock-body-panel-remove">削除</div>
  </div>`
}
