# $resource

# parameter with request body

```javascript
resource.save({id:14, type:'user'}, {name:'Bob Dole'});
```

non-GET "class" actions: Resource.action([parameters], postData, [success], [error])

```
Request URL:http://run.plnkr.co/JAOqZqW6RSywatUM/badUrl/user/14
Request Method:PUT
Request Payloadview source
{name:Bob Dole}
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/19529483/how-do-i-not-send-url-template-parameters-with-request-body-in-angular)