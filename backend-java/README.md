#Building a RESTful Web Service

What You Will Build - 

1. Default Input and Ouput

You will build a service that will accepts HTTP GET requests at - 
http://localhost:8080/welcome.

It will respond with a JSON representation of a greeting, as the following listing shows:

{"id":1,"content":"My name is hiAkki!"}

2. Custom Input and Output

You can customize the greeting with an optional name parameter in the query string, as the following listing shows:

http://localhost:8080/greeting?name=Developer

The name parameter value overrides the default value of hiAkki and is reflected in the response, as the following listing shows:

{"id":1,"content":"My name is Developer!"}


Requirements -
1. JDK 1.8 (necessary for gradle commands to work, maven will work with any latest version)
2. Already included gradle and maven utils in this repo


Run the Server -

1. Using gradle -

    a. Run directly via gradle
    
        ./gradlew bootRun

    OR
        
    a. To build the JAR
    
        ./gradlew build
    
    b. Run the jar using java
    
        java -jar build/libs/hiakki-java-rest-service-0.0.1-SNAPSHOT.jar

2. Using maven -
    a. Run directly via maven
        ./mvnw spring-boot:run

        OR

    a. To build the JAR
        ./mvnw clean package
    b. Run the jar using java
        java -jar target/hiakki-java-rest-service-0.0.1-SNAPSHOT.jar


Main Code is written under - 
1. java-dev-project/rest-service/src/main/java/com/example/restservice/Welcome.java
2. java-dev-project/rest-service/src/main/java/com/example/restservice/WelcomeController.java

