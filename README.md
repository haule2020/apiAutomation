# apiAutomation
**Assignment:** Write API automated tests for the feature "search weather in your city"

**Prerequisites:**
 - Java jdk latest version

**Required library dependency:**  Included in POM.xml

**How to view test cases:** Please open file searchWeatherCity.feature at:

    searchWeather/src/test/resources/searchWeatherCity.feature  
    
    Can change the parameters in table  'Examples'
            
**How to run test from eclipse:** Please run as "JUnit Test"  from callAPIRunner.java in below path:

    searchWeather/src/test/java/runner/ApiRunnerTest.java
 
**How to run test from command line:** 

   - Need to have  **apache-maven-3.8.1** in the sysytem
   - Add to Environment Variables: 
   
   name: M2_HOME  ;      value: C:\Program Files\apache-maven-3.8.1
   
   name: M2       ;     value : %M2_HOME%\bin
   
   
   path: %M2_HOME%\bin
   
  - Open command line and run:
   C:/searchWeather mvn test
 
**How to modify API URLs:** Please check file Configuration.properties in below path

    searchWeather/configs/Configuration.properties     
  
**How to check test Reports after test:** Please check different report types at:

    searchWeather/target/cucumber-reports/

**Code static check report:** searchWeather/reports/pmd-report.txt
