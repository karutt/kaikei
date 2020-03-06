// remove key
$(".custom-tenkey-remove").on("click", function() {
  new_value = addcomma($(".custom-head-value").html().slice(0, -1))
  new_value = new_value.length == 0 ? 0 : new_value
  $(".custom-head-value").html(new_value)
})
$(".custom-tenkey-ac").on("click", function() {
  $(".custom-head-value").html("0")
})

// number key
$(".custom-tenkey td.number").on("click", function() {
  v = $(this).html()
  input = removecomma($(".custom-head-value").html())
  input = input==0 ? "" : input
  input = addcomma(input + v)
  $(".custom-head-value").html(input)
})

// add key
$(".add_to_stock").on("click", function() {
  v = removecomma($(".custom-head-value").html())
  if(v!=0) {
    $(".stock-body").append(stock_template("_カスタム商品", v))
    $(".stock-body:last()").stop().animate({'backgroundColor': '#e6f7ff'}, 0, function() {
      $(this).animate({'backgroundColor': '#ffffff'}, 500)
    });
    calc_sum()
    $(".custom-head-value").html("0")
  }
})

$("body").on("click", function() {
  v = removecomma($(".custom-head-value").html())
  if(v==0) {
    $(".add_to_stock").css({backgroundColor: "#f7f7f7"})
  } else {
    $(".add_to_stock").css({backgroundColor: "#edfcff"})
  }
})
