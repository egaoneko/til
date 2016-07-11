# Maven Compiler Plugin

특정 프로젝트는 특정 버전의 JDK 로 빌드해야 하는 경우가 있다. JDK 는 이를 위해 -source와 -target 옵션으로 source 와 class 파일을 특정 JDK 의 버전에 맞출수 있다.

### pom.xml에 Plugin 추가

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-compiler-plugin</artifactId>
	<version>2.1</version>
	<configuration>
		<source>${java.version}</source>
		<target>${java.version}</target>
	</configuration>
</plugin>
```

### Reference

* [Apache Maven Compiler Plugin](https://maven.apache.org/plugins/maven-compiler-plugin/)
* [Maven Compiler Plugin - 사용할 jdk 버전 설정하기](https://www.lesstif.com/pages/viewpage.action?pageId=14745653)