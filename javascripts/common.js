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
