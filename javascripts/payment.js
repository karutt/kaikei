time = 300
$(".close-btn").on("click", function() {
  $(".cover").stop().fadeOut(time)
  $(".payment").stop().fadeOut(time+100).animate({'top': '100%'}, { duration: time, queue: false, easing: 'easeOutCubic'});
})


$(".payment-btn").on("click", function() {
  sum_value = removecomma($(".stock-foot > .sum_value").html())
  $(".payment-head-value").html(addcomma(sum_value))
  set_charge(sum_value)
  set_tenkey(sum_value)
  $(".cover").stop().fadeIn(time-200)
  $(".payment").stop().fadeIn(time+100).animate({'top': '1.5%'}, { duration: time, queue: false, easing: 'easeOutCubic'});
})

set_charge = function(sum_value) {
  input = removecomma($(".payment-body-cash-wrapper > .value").html().slice(1))
  charge = input - sum_value
  if (charge < 0) {$(".payment-foot-charge").addClass("unpaid")}
  else {$(".payment-foot-charge").removeClass("unpaid")}
  $(".payment-foot-charge > .value").html(addcomma(charge))
}

set_tenkey = function(sum_value) {
  if(sum_value < 1000) {
    n1 = Number(String(sum_value)[0])
    n2 = Number(String(sum_value).slice(1))
    sp1 = 100*n1 + (n2 == 0 ? 0 : 100)
    sp2 = (n1 > 5 ? 10 : 5)*100
  } else if(sum_value < 2000) {
    n1 = Number(String(sum_value)[0])
    n2 = Number(String(sum_value)[1])
    n3 = Number(String(sum_value).slice(2))
    sp1 = 1000 + 100*n2 + (n3 == 0 ? 0 : 100)
    sp2 = 1000 + (n2 > 5 ? 10 : 5)*100
  } else {
    n1 = Number(String(sum_value)[0])
    n2 = Number(String(sum_value).slice(1))
    len = String(sum_value).length
    sp1 = n1*Math.pow(10, len-1) + (n2 == 0 ? 0 : Math.pow(10, len-1))
    sp2 = Math.pow(10, len)
  }
  $(".tenkey-th-sp1").html(addcomma(sp1))
  $(".tenkey-th-sp2").html(addcomma(sp2))
}

// tenkey
$(".tenkey-tr td:not(.tenkey-th-ac)").on("click", function() {
  v = $(this).html()
  payment = removecomma($(".payment-body-cash-wrapper .value").html())
  payment = payment==0 ? "" : payment
  input = addcomma(payment + v)
  $(".payment-body-cash-wrapper .value").html(input)
})
