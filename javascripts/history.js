
// talbeの幅指定
$(".history").css({width:$("#panel1").width()+"px"})

// デフォルトheaderの作成
for(let key of ["時間", "合計", "お預かり"]) {
  $(".history-table-head").append("<th>"+key+"</th>")
}
insert_th = ""
$(".menu-body-list-item .name").each(function() {
  stock_name = $(this).html()
  insert_th += "<th id='"+stock_name+"'>"+ stock_name + "</th>"
})
$(".history-table-head").append(insert_th)
$(".history-table-head").append("<th id='カスタム商品'>カスタム商品</th>")

$("body").click(function() {
  console.log()
})

//メニューヘッダーの追加
$(".menu-edit-add_btn").click(function() {
  stock_name = $(".menu-body-list-item:last .name").html()
  insert_th = "<th id='"+stock_name+"'>"+ stock_name + "</th>"
  insert_td = "<td class='"+stock_name+"'>0</td>"
  $(".history-table-head th:last").before(insert_th)
  $(".history td").last().before(insert_td)

})

//メニューヘッダーの削除
$(".menu-body-list").on("click", ".trash", function() {
  if($(".menu-body-list-item").length > 1) {
    id = $(this).parent().children(".name").html()
    $("#"+id).remove()
  }
})
$(".menu-edit-remove_btn").on("click",  function() {
  if($(".menu-body-list-item").length > 1) {
    id = $(".menu-body-list-item:last .name").html()
    $("#"+id).remove()
  }
})

// メニューヘッダーの編集　ーー（edit_menu.jsを参照
get_stock_data = function() {
  stock_data = ""
  $(".history-table-head th").slice(3).each(function() {
    id = $(this).attr("id")
    num = 0
    if ($("#_"+id).length) {
      num = $("#_"+id).children(".stock-body-panel-body").children(".num").html()
    }
    stock_data += "<td class="+id+">"+num+"</td>"
  })
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
    insert_text += "<td>"+start+"</td><td>"+sum_value+"</td><td>"+cash+"</td>"
    insert_text += get_stock_data()
    insert_text = "<tr class='history-table-body'>" + insert_text + "</tr>"
    $(".history-table").append(insert_text)
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
