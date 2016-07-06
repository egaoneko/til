# DB 간단한 테스트

```java
public class DBSimpleTest{
    private static Connection conn=null;
 
    public static void main(String args[]){
        try{
            Class.forName("com.mysql.jdbc.Driver");
 
            conn = DriverManager.getConnection(
                    "jdbc:mysql://127.0.0.1:3306/testdb?autoReconnect=true",
                    "root",
                    "root");
 
            conn.close();
 
            System.out.println("Success");
        }catch (Exception e){
            e.getMessage();
            System.out.println(e.getMessage());
        }
    }
}
```