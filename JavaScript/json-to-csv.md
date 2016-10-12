# JSON to CSV

## JSON to CSV

```javascript
<html>
<head>
    <title>Demo - Covnert JSON to CSV</title>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="https://github.com/douglascrockford/JSON-js/raw/master/json2.js"></script>
     
    <script type="text/javascript">
    // JSON to CSV Converter
        function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';
 
            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','
 
                    line += array[i][index];
                }
 
                str += line + '\r\n';
            }
 
            return str;
        }
     
    // Example
        $(document).ready(function () {
     
      // Create Object
            var items = [
          { name: "Item 1", color: "Green", size: "X-Large" },
          { name: "Item 2", color: "Green", size: "X-Large" },
          { name: "Item 3", color: "Green", size: "X-Large" }];
 
      // Convert Object to JSON
      var jsonObject = JSON.stringify(items);
         
      // Display JSON
            $('#json').text(jsonObject);
       
      // Convert JSON to CSV & Display CSV
            $('#csv').text(ConvertToCSV(jsonObject));
        }); 
    </script>
</head>
<body>
    <h1>
        JSON</h1>
    <pre id="json"></pre>
    <h1>
        CSV</h1>
    <pre id="csv"></pre>
</body>
</html>
```

## Download

```javascript
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

link.click(); // This will download the data file named "my_data.csv".
```

## Korean Encoding

```javascript
var uri = 'data:text/csv;charset=UTF-8,\uFEFF' + encodeURI(CSV);
```

## Example

[Plunker](https://embed.plnkr.co/U8zQV4/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/U8zQV4/" frameborder="0" allowfullscren="allowfullscren"></iframe>

```javascript
function downloadExcel () {
  var data = [
          { name: "Item 1", color: "Green", size: "X-Large" },
          { name: "Item 2", color: "Green", size: "X-Large" },
          { name: "Item 3", color: "Green", size: "X-Large" }];

  var order = ["name", "color", "size"];
  var head = ["Name", "Color", "Size"];

  // Convert Object to JSON
  var jsonObject = JSON.stringify(data);
  var csvContentType = "data:text/csv;charset=utf-8,\uFEFF";
  var csvContent = csvContentType + ConvertToCSV(jsonObject, order, head);
  var encodedUri = encodeURI(csvContent);
  var fileName = ctrl.name + '_' + ctrl.place + '.csv';
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName); // Required for FF
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link);
}

function ConvertToCSV (objArray, order, head) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  if (head) {
    str += head.join(',') + '\r\n';
  }

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var k = 0; k < order.length; k++) {
      var key = order[k];
      if (line != '') line += ',';
      line += array[i][key];
    }

    str += line + '\r\n';
  }

  return str;
}
```

## Reference

* [JSON to CSV](http://www.zachhunter.com/2011/06/json-to-csv/)
* [stack overflow](http://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
* [json to csv 출력(한글해결 포함)](http://codezip.tistory.com/697)
