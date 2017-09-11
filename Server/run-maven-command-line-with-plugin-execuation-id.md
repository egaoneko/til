# Run maven command line with plugin execuation id

```xml
<!-- Frontend Plugin -->
<plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <version>1.5</version>
    <configuration>
        <workingDirectory>${project.build.directory}</workingDirectory>
    </configuration>
    <executions>
        <execution>
            <id>install-node-and-npm</id>
            <goals>
                <goal>install-node-and-npm</goal>
            </goals>
            <configuration>
                <nodeVersion>v6.11.3</nodeVersion>
                <npmVersion>3.10.10</npmVersion>
            </configuration>
        </execution>
        <execution>
            <id>npm-install</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <configuration>
                <arguments>install</arguments>
            </configuration>
        </execution>
        <execution>
            <id>npm-build</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>run-script dev-build</arguments>
            </configuration>
        </execution>
        <execution>
            <id>npm-watch</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>run-script watch</arguments>
            </configuration>
        </execution>
        <execution>
            <id>npm-test</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>run-script test</arguments>
            </configuration>
        </execution>
    </executions>
</plugin>
```

```xml
<execution>
    <id>npm-install</id>
    <goals>
        <goal>npm</goal>
    </goals>
    <configuration>
        <arguments>install</arguments>
    </configuration>
</execution>
```

첫번째 소스와 같이 maven 플러그인이 있을 때, 두번째 소스와 같이 설정된 execuation 들을 개별적으로 command line에서 돌리고 싶다면, 아래와 같이 실행하면 된다.

```bash
mvn frontend:install-node-and-npm@install-node-and-npm frontend:npm@npm-install frontend:npm@npm-watch
```
