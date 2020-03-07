
// talbeの幅指定
$(".history").css({width:$("#panel1").width()+"px"})
height = $("#panel1").height()
$(".history").css({height:height+"px"})

var $demo1 = $('table.history-table');
$demo1.floatThead({
  scrollContainer: function($table){
    return $table.closest('.history');
  }
});


// デフォルトheaderの作成
for(let key of ["時間", "合計", "お預かり"]) {
  $(".history-table-head").append("<th id="+key+">"+key+"</th>")
}
insert_th = ""
$(".menu-body-list-item").each(function() {
  stock_name = $(this).children(".name").html()
  stock_value = $(this).children(".value").html()
  insert_th += "<th id="+stock_name+" value="+stock_value+">"+ stock_name + "</th>"
})
$(".history-table-head").append(insert_th)
$(".history-table-head").append("<th id='カスタム商品'>カスタム商品</th>")



//メニューヘッダーの追加
$(".menu-edit-add_btn").click(function() {
  stock_name = $(".menu-body-list-item:last .name").html()
  stock_value = $(".menu-body-list-item:last .value").html()
  insert_th = "<th id="+stock_name+" value="+stock_value+">"+ stock_name + "</th>"
  insert_td = "<td class='"+stock_name+"'>0</td>"
  $(".history-table-head th:last").before(insert_th)
  $(".history-table-body").each(function() {$(this).children("td").last().before(insert_td)})
  $demo1.floatThead('reflow');

})

//メニューヘッダーの削除
$(".menu-body-list").on("click", ".trash", function() {
  if($(".menu-body-list-item").length > 1) {
    id = $(this).parent().children(".name").html()
    $("#"+id).remove()
    $("."+id).remove()
    $demo1.floatThead('reflow');
  }
})

$(".menu-edit-remove_btn").on("click",  function() {
  if($(".menu-body-list-item").length > 1) {
    id = $(".menu-body-list-item:last .name").html()
    $("#"+id).remove()
    $("."+id).remove()
    $demo1.floatThead('reflow');
  }
})

// メニューヘッダーの編集　ーー（edit_menu.jsを参照

// 会計後ヒストリーを追加（関数）
get_stock_data = function() {
  stock_data = ""
  $(".history-table-head th").slice(3, -1).each(function() {
    id = $(this).attr("id")
    value = $(this).attr("value")
    num = 0
    if ($("#_"+id).length) {
      num = $("#_"+id).children(".stock-body-panel-body").children(".num").html()
    }

    stock_data += "<td class="+id+" value="+value+">"+num+"</td>"
  })
  return stock_data
}
get_custom_data = function() {
  stock_data = ""
  target = $("#_カスタム商品")
  num = target.length
  value = 0
  target.children(".stock-body-panel-body").children(".value").each(function() {
    value += Number($(this).html())
  })
  stock_data += "<td class='カスタム商品' value="+value+">"+num+"</td>"
  return stock_data
}

// 会計後ヒストリーを追加
$(".finish-btn").click(function() {
  if($(this).hasClass("finish")) {
    num = $(".history-table-head th").length
    insert_text = ""
    start = new Date()
    start = start.getHours() + ":" + (String(start.getMinutes()).length < 2 ? "0"+start.getMinutes() :start.getMinutes() )
    sum_value = $(".sum_value").html()
    cash = $(".payment-body-cash-wrapper .value").html()
    insert_text += "<td class='時間'>"+start+"</td><td class='合計'>"+sum_value+"</td><td class='お預かり'>"+cash+"</td>"
    insert_text += get_stock_data() + get_custom_data()
    insert_text = "<tr class='history-table-body'>" + insert_text + "</tr>"
    $(".history-table tbody").prepend(insert_text)
    $(".stock-body-panel").remove()
    $demo1.floatThead('reflow');
  }
})

$(".edit_history_btn").click(function() {
  if (!$(this).hasClass("edit")) {
    $(this).addClass("edit")
    $(".edit_cover").fadeIn(100)

  }else {
    $(this).removeClass("edit")
    $(".edit_cover").fadeOut(100)
  }

})

// hist = {}
// table_to_json = function() {
//   $(".history-table-head th").each(function() {
//     key = $(this).html()
//     hist[key] = []
//   })
// }
// table_to_json()
