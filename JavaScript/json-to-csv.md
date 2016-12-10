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

## Large Json

* [BLOB와 BLOB URL](https://taegon.kim/archives/5078)

```javascript
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {     

    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';    
    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   

    //this trick will generate a temp "a" tag
    var link = document.createElement("a");    
    link.id="lnkDwnldLnk";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);

    var csv = CSV;  
    blob = new Blob([csv], { type: 'text/csv' }); 
    var csvUrl = window.URL.createObjectURL(blob);
    var filename = 'UserExport.csv';
    $("#lnkDwnldLnk")
    .attr({
        'download': filename,
        'href': csvUrl
    }); 

    $('#lnkDwnldLnk')[0].click();    
    document.body.removeChild(link);
}
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
  var csvContentType = "data:text/csv;charset=utf-8";
  var csvContent = ConvertToCSV(jsonObject, order, head);
  var fileName = ctrl.name + '_' + ctrl.place + '.csv';
  var link = document.createElement("a");
  var blob = new Blob([csvContent], {type: csvContentType});

  if (window.navigator.msSaveBlob) {
    // FOR IE BROWSER
    navigator.msSaveBlob(blob, fileName);
  } else {
    var csvUrl = window.webkitURL.createObjectURL(blob);
    link.href = csvUrl;
    link.style = "visibility:hidden";
    link.download = fileName;
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
      line += array[i][key] !== undefined ? array[i][key] : '';;
    }

    str += line + '\r\n';
  }

  return str;
}
```

## IE Download

```javascript
function downloadFile(data, fileName) {
    var csvData = data;
    var blob = new Blob([ csvData ], {
        type : "application/csv;charset=utf-8;"
    });

    if (window.navigator.msSaveBlob) {
        // FOR IE BROWSER
        navigator.msSaveBlob(blob, fileName);
    } else {
        // FOR OTHER BROWSERS
        var link = document.createElement("a");
        var csvUrl = URL.createObjectURL(blob);
        link.href = csvUrl;
        link.style = "visibility:hidden";
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
```

## Reference

* [JSON to CSV](http://www.zachhunter.com/2011/06/json-to-csv/)
* [stack overflow](http://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
* [json to csv 출력(한글해결 포함)](http://codezip.tistory.com/697)
* [stack overflow](http://stackoverflow.com/questions/25009295/how-to-export-large-amount-of-json-data-to-csv-without-browser-crash)
* [stack overflow](http://stackoverflow.com/questions/23301467/javascript-exporting-large-text-csv-file-crashes-google-chrome)