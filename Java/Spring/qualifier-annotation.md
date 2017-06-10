# @Qualifier Annotation

> There may be a situation when you create more than one bean of the same type and want to wire only one of them with a property. In such cases, you can use the `@Qualifier` annotation along with `@Autowired` to remove the confusion by specifying which exact bean will be wired.[@Qualifier Annotation - tutorialspoint](https://www.tutorialspoint.com/spring/spring_qualifier_annotation.htm)

## Example

```java
package com.tutorialspoint;

public class Student {
   private Integer age;
   private String name;

   public void setAge(Integer age) {
      this.age = age;
   }
   public Integer getAge() {
      return age;
   }
   public void setName(String name) {
      this.name = name;
   }
   public String getName() {
      return name;
   }
}
```

```xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xmlns:context = "http://www.springframework.org/schema/context"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
   http://www.springframework.org/schema/context
   http://www.springframework.org/schema/context/spring-context-3.0.xsd">

   <context:annotation-config/>

   <!-- Definition for profile bean -->
   <bean id = "profile" class = "com.tutorialspoint.Profile"></bean>

   <!-- Definition for student1 bean -->
   <bean id = "student1" class = "com.tutorialspoint.Student">
      <property name = "name" value = "Zara" />
      <property name = "age" value = "11"/>
   </bean>

   <!-- Definition for student2 bean -->
   <bean id = "student2" class = "com.tutorialspoint.Student">
      <property name = "name" value = "Nuha" />
      <property name = "age" value = "2"/>
   </bean>

</beans>
```

```java
package com.tutorialspoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Profile {
   @Autowired
   @Qualifier("student1")
   private Student student;

   public Profile(){
      System.out.println("Inside Profile constructor." );
   }
   public void printAge() {
      System.out.println("Age : " + student.getAge() );
   }
   public void printName() {
      System.out.println("Name : " + student.getName() );
   }
}
```