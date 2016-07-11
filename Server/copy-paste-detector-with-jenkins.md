# Copy Paste Detector with Jenkins

코드의 가독성을 높이고 유지보수가 용이하도록 Copy & Paste로 생성된 중복 코드를 식별해주는 플러그인이다.

### Plugin 설치 (Jenkins 관리 > 플러그인 관리 > 설치 가능)

#### DRY plugin

![dry-plugin](../img/Server/code-paste-detector-with-jenkins/dry-plugin.png)

### Plugin 설정

#### Invoke top-level Maven targets

![build](../img/Server/code-paste-detector-with-jenkins/build.png)

* Project > 설정 > Build > Add build step > Invoke top-level Maven targets

pmd에 대한 golas을 추가한다.

#### Publish duplicate code analysis results

![post-build](../img/Server/code-paste-detector-with-jenkins/post-build.png)

* Project > 구성 > Post-build Action > Add post-build action > Publish duplicate code analysis results
 

```
Duplicate code results : **/cpd.xml
```

### pom.xml

#### plugin 추가

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-pmd-plugin</artifactId>
	<version>2.3</version>
	<configuration>
		<linkXref>true</linkXref>
		<sourceEncoding>utf-8</sourceEncoding>
		<minimumTokens>100</minimumTokens>
		<targetJdk>1.5</targetJdk> <!-- 해당 JDK 버전 명시 -->
	</configuration>
</plugin>
```

### Reference

* [Maven PMD Reporting Plugin](http://www.xenomity.com/93)
* [BTS & QP wiki](http://devcafe.nhncorp.com/QPTalk/wiki_1/entry/Hudson/Java/CPD%20%EC%97%B0%EB%8F%99)