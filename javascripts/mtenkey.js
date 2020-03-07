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

mw = 398
mh = 440
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

  if($(".edit_history_btn").hasClass("edit")) {
    sum_value = 0
    mtenkey_target.parent().children("td:nth-child(n+4)").each(function() {
      sum_value += Number($(this).attr("value")) * Number($(this).html())
    })
    mtenkey_target.parent().children(".合計").html(sum_value)
    mtenkey_target.css({backgroundColor: "#fff"})
  } else {
    calc_sum()
  }
  mtenkey_target = 0
})


$("body").click(function(e) {
  if(!($(e.target).closest('.mtenkey-head').length | $(e.target).closest('.mtenkey-tenkey-wrapper').length) && turn) {
    $(".mtenkey").css({display: "none"})
    $(".triangle").css({display: "none"})
    $(".mtenkey-head-value").html("0")
    mtenkey_target.css({backgroundColor: "#fff"})
    mtenkey_target = 0
  }
  if (mtenkey_target) {
    turn = 1
  }
});

$(".history-table").on("click", "td:nth-child(n+3)", function() {
  if($(".edit_history_btn").hasClass("edit")) {
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
    mtenkey_target.css({backgroundColor: "rgb(245, 253, 255)"})
    $(".mtenkey").css({left: x-mw-60, top:t})
    $(".mtenkey").css({display: "block"})
    $(".triangle").css({display: "none"})
    $(".triangle").css({display: "block", left: x-18, top: y+oh/2-20})
    turn = 0
  }
})
