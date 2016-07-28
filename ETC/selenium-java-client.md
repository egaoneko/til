# Selenium Java Client

### Installation

* [Selenium - Download](http://www.seleniumhq.org/download/)
* [Selenium - Maven Information](http://www.seleniumhq.org/download/maven.jsp)

### Tutorial

* [Junit Test with Selenium WebDriver](http://toolsqa.com/java/junit-framework/junit-test-selenium-webdriver/)

```java
package unitTests;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumTest {
	 	private static FirefoxDriver driver;
	 	WebElement element;

	 @BeforeClass
     public static void openBrowser(){
         driver = new FirefoxDriver();
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} 

	 @Test
     public void valid_UserCredential(){

		 System.out.println("Starting test " + new Object(){}.getClass().getEnclosingMethod().getName());
	     driver.get("http://www.store.demoqa.com");	
	     driver.findElement(By.xpath(".//*[@id='account']/a")).click();
	     driver.findElement(By.id("log")).sendKeys("testuser_3");
	     driver.findElement(By.id("pwd")).sendKeys("Test@123");
	     driver.findElement(By.id("login")).click();
	     try{
			 element = driver.findElement (By.xpath(".//*[@id='account_logout']/a"));
		 }catch (Exception e){
			}
	     Assert.assertNotNull(element);
	     System.out.println("Ending test " + new Object(){}.getClass().getEnclosingMethod().getName());
     }

	 @Test
     public void inValid_UserCredential()
     {
		 System.out.println("Starting test " + new Object(){}.getClass().getEnclosingMethod().getName());
	     driver.get("http://www.store.demoqa.com");	
	     driver.findElement(By.xpath(".//*[@id='account']/a")).click();
	     driver.findElement(By.id("log")).sendKeys("testuser");
	     driver.findElement(By.id("pwd")).sendKeys("Test@123");
	     driver.findElement(By.id("login")).click();
	     try{
			element = driver.findElement (By.xpath(".//*[@id='account_logout']/a"));
	     }catch (Exception e){
			}
	     Assert.assertNotNull(element);
	     System.out.println("Ending test " + new Object(){}.getClass().getEnclosingMethod().getName());
     }

	 @AfterClass
	 public static void closeBrowser(){
		 driver.quit();
	 }
}
```

### Selenium IDE

* [ATDD2 - selenium 설치 및 첫번째 테스트 추가](https://slipp.net/wiki/pages/viewpage.action?pageId=4489317)
* [ATDD3 - 테스트 recording을 위해 selenium ide 활용](https://slipp.net/wiki/pages/viewpage.action?pageId=4489338)

### Addition

#### Send Enter

* [stack overflow](http://stackoverflow.com/questions/1629053/typing-enter-return-key-in-selenium)

```java
import org.openqa.selenium.Keys

WebElement.sendKeys(Keys.RETURN);
```

#### Popup

* [stack overflow](http://stackoverflow.com/questions/19403949/how-to-handle-pop-up-in-selenium-webdriver-using-java)

```java
String parentWindowHandler = driver.getWindowHandle(); // Store your parent window
String subWindowHandler = null;

Set<String> handles = driver.getWindowHandles(); // get all window handles
Iterator<String> iterator = handles.iterator();
while (iterator.hasNext()){
    subWindowHandler = iterator.next();
}
driver.switchTo().window(subWindowHandler); // switch to popup window
                                            // perform operations on popup

driver.switchTo().window(parentWindowHandler);  // switch back to parent window
```

#### compare text in xpath

* [stack overflow](http://stackoverflow.com/questions/17329436/selenium-xpath-selector-based-on-the-element-text)

```
ul/li[contains(text(), "Second")]
ul/li[text() = 'Second']
```

#### wait load

```java
try {
    Thread.sleep(3000);
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

#### select a iframe

* [How to select a frame using selenium?](http://stackoverflow.com/questions/18366689/how-to-select-a-frame-using-selenium)

```java
driver.switchTo().frame(driver.findElement(By.xpath("//iframe[contains(@src,'FUN_UnitList_FilterByLevelIndexOne')]"));
```

#### selectWindow(null)

selectWindow함수가 없는 경우에 자식 윈도우로 이동해서 처리한다.

```java
// 자식 윈도우 이동
        String parentWindowHandler = driver.getWindowHandle(); // Store your parent window
        String subWindowHandler = null;

        Set<String> handles = driver.getWindowHandles(); // get all window handles
        Iterator<String> iterator = handles.iterator();
        while (iterator.hasNext()){
            subWindowHandler = iterator.next();
            driver.switchTo().window(subWindowHandler);
            ... Do something ...
        }
```