//２次元配列をcsvに変換し、保存する

var formatDate = function () {
  date = new Date()
  format = 'YYYY-MM-DD_hh/mm/ss';
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  return format;
};

window.downloadCsv = (function() {
  var tableToCsvString = function(table) {
    var str = '\uFEFF';
    for (var i = 0, imax = table.length - 1; i <= imax; ++i) {
      var row = table[i];
      for (var j = 0, jmax = row.length - 1; j <= jmax; ++j) {
        console.log(row)
        str += '' + row[j].replace('', '') + '';
        if (j !== jmax) {
          str += ',';
        }
      }
      str += '\n';
    }
    return str;
  };
  var createDataUriFromString = function(str) {
    return 'data:text/csv,' + encodeURIComponent(str);
  }
  var downloadDataUri = function(uri, filename) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return function(table, filename) {
    if (!filename) {
      filename = formatDate()+'.csv';
    }
    var uri = createDataUriFromString(tableToCsvString(table));
    downloadDataUri(uri, filename);
  };
})();
formatDate
