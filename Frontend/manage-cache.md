# Manage Cache

## 오래된 캐시(stale cache) 갱신

```xml
<!-- stale cache -->
<script src="http://example.com/ex.js"></script>

<!-- stale cache refresh -->
<script src="http://example.com/ex.js?ver=201702011100"></script>
```

배포시마다 캐시가 갱신되지 않아서 오작동하는 상황이 발생하였다. 위와 같이 파라미터를 주어 처리하여 오래된 캐시를 갱신하였다.