// remove key
$(".mtenkey-tenkey-remove").on("click", function() {
  new_value = addcomma($(".mtenkey-head-value").html().slice(0, -1))
  new_value = new_value.length == 0 ? 0 : new_value
  $(".mtenkey-head-value").html(new_value)
})
$(".mtenkey-tenkey-ac").on("click", function() {
  $(".mtenkey-head-value").html("0")
})


// number key
$(".mtenkey-tenkey td.number").on("click", function() {
  v = $(this).html()
  input = removecomma($(".mtenkey-head-value").html())
  input = input==0 ? "" : input
  input = addcomma(input + v)
  $(".mtenkey-head-value").html(input)
})

mw = 342
mh = 360
bh = $("body").height()

mtenkey_target = 0
turn = 0
$(".stock-body").on("click", ".num", function() {
  mtenkey_target = $(this)
  ow = $(this).outerWidth()
  oh = $(this).outerHeight()
  x = $(this).offset().left
  y = $(this).offset().top
  if(y+oh/2 + mh/2 > bh ) {
    t = bh - mh
  } else if( y+oh/2 - mh/2 < 0) {
    t = 0
  } else {
    t = (y+oh/2) - mh/2
  }
  $(".mtenkey").css({left: x+ow+15, top:t})
  $(".mtenkey").css({display: "block"})
  $(".triangle").css({display: "none"})
  mtenkey_target.parent().children(".triangle").css({display: "block", left: ow+31})
  turn = 0
})

$(".mtenkey .confirm").click(function() {
  num = removecomma($(".mtenkey-head-value").html())
  mtenkey_target.html(num)
  $(".mtenkey").css({display: "none"})
  $(".triangle").css({display: "none"})
  $(".mtenkey-head-value").html("0")
  mtenkey_target = 0
  calc_sum()
})


$("body").click(function(e) {
  if(!($(e.target).closest('.mtenkey-head').length | $(e.target).closest('.mtenkey-tenkey-wrapper').length) && turn) {
    $(".mtenkey").css({display: "none"})
    $(".triangle").css({display: "none"})
    $(".mtenkey-head-value").html("0")
    mtenkey_target = 0
  }
  if (mtenkey_target) {
    turn = 1
  }
});
