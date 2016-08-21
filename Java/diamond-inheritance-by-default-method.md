# default method의 diamond 상속

```java
public interface AInterface extends Interface {
	default int ccc() {
		return 1;
	}
}

public interface BInterface extends Interface{
	default int ccc() {
		return 2;
	}
}
```

```java
public class DiamondClass implements AInterface, BInterface {
	@Override
	public int aaa() {
		return 0;
	}

	@Override
	public int bbb() {
		return 0;
	}
}
```

```
Duplicate default methods named ccc with the parameters () and () are inherited from the types BInterface and AInterface
```

``DiamondClass``에서 ``ccc()`` 메소드를 재정의 함으로써 해결한다. ``AInterface.super.ccc()`` 혹은 ``BInterface.super.ccc()``로 상속한 인터페이스의 ``ccc()`` 메소드를 부를 수 있다.

```java
public class DiamondClass implements AInterface, BInterface {
	...
	@Override
	default int ccc() { //override the ccc to resolve ambiguity
    	return 3;
    }
}
```

```java
public class DiamondClass implements AInterface, BInterface {
	...
	@Override
	default int ccc() { //override the ccc to resolve ambiguity
    	AInterface.super.ccc();
    }
}
```

### Reference

* [Java8 default 인터페이스](http://kbs0327.github.io/blog/technology/java8-default-interface/)
* [Java 8 Default Methods Tutorial](http://viralpatel.net/blogs/java-8-default-methods-tutorial/)