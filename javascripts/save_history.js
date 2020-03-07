hist = {}


table_to_json = function() {
  json = {}
  $(".history-table-head th").each(function() {
    key = $(this).html()
    json[key] = []
  })

  for(let key in json) {
    $("."+key).each(function() {
      a = $(this).attr("value") ? [$(this).attr("value"), $(this).html()] :[$(this).html()]
      json[key].push(a)
    })
  }
  return json
}

describe = function() {
  json = {}
  a1 = []
  a2 = []
  $(".history-table-head th").each(function() {
    key = $(this).html()
    if(key!="時間") {
    json[key] = 0
    a1.push(key)
    }
  })

  for(let key in json) {
    $("."+key).each(function() {
      json[key] += (removecomma($(this).html()))
    })
  }
  sum_num = 0
  for(let key in json) {
    if(!(key=="合計" | key=="お預かり")) {
      sum_num += (json[key])
    }
    a2.push(String(json[key]))
  }
  a1.push("合計点数")
  a2.push(String(sum_num))
  return [a1, a2]
}

$(".save_history_btn").click(function() {
  downloadCsv(describe())
})

$(".release_btn").click(function() {
  if(confirm('ローカルストレージとテーブルにあるデータを削除します。\nよろしいですか？')) {
    remove_history()
    location.reload()
  }
})

$(".finish-btn").click(function() {
  json = table_to_json()
  save_history(json)
})

//ストレージのメニューを追加
path = $(".reset_btn img").attr("src").slice(0, -9) + "trash.svg"
menu_template = function(name, value) {
  return `<li class="menu-body-list-item">
  <div class="name">`+name+`</div>
  <div class="value">`+value+`</div>
  <img src="`+path+`" alt="Trash" class="trash" />
  </li>`
}
hist = get_history()
if(hist) {
  $(".menu-body-list").html("")
  menu_list = ""
  index = 0
  n =Object.keys(hist).length
  for(let key in hist) {
    if(index > 2 && index != n-1) {
      menu_list += menu_template(key, hist[key][0][0])
    }
    index += 1
  }
  $(".menu-body-list").append(menu_list)
}
