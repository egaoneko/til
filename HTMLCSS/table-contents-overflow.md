# Table contents overflow

```xml
<head>
    <style>
        table {
            width:100%;
            table-layout:fixed;
        }
        td {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    </style>
</head>
<body>
    <table border="1">
        <tr>
            <td>CHAMPIONNAT</td>
            <td>CHAMPIONNAT</td>
            <td>CHAMPIONNAT</td>
            <td>CHAMPIONNAT</td>
            <td>CHAMPIONNAT</td>
            <td>CHAMPIONNAT</td>
        </tr>
    </table>
</body>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/5932018/fluid-table-with-td-nowrap-text-overflow)