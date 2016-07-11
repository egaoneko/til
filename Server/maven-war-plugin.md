# Maven WAR Plugin

The WAR Plugin is responsible for collecting all artifact dependencies, classes and resources of the web application and packaging them into a web application archive.

### pom.xml에 Plugin 추가

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-war-plugin</artifactId>
	<version>2.6</version>
	<configuration>
		<webResources>
			<resource>
	 			<directory>src/main/webapp/WEB-INF</directory>
				<targetPath>WEB-INF</targetPath>
				<excludes>
					<exclude>classes/*</exclude>
					<exclude>tld/*</exclude>
					<exclude>views/*</exclude>
				</excludes>
				<includes>
					<include>spring/applicationContext.xml</include>
					<include>web.xml</include>
				</includes>
			</resource>
		</webResources>
	</configuration>
</plugin>
```

### Reference

* [Apache Maven WAR Plugin](http://maven.apache.org/plugins/maven-war-plugin/)
* [Maven WAR Plugin](https://www.lesstif.com/display/JAVA/Maven+WAR+Plugin)