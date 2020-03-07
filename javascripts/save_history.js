hist = {}


table_to_json = function() {
  $(".history-table-head th").each(function() {
    key = $(this).html()
    hist[key] = []
  })

  for(let key in hist) {
    $("."+key).each(function() {
      a = $(this).attr("value") ? [$(this).attr("value"), $(this).html()] :[$(this).html()]
      hist[key].push(a)
    })
  }
}

$(".save_history_btn").click(function() {
  hist = {}
  table_to_json()
  save_history(hist)
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
