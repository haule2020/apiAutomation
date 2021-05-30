# apiAutomation


**Prerequisites:**
 - Java latest version
 - Eclipse and  Maven plugin


**Required library dependency:**  Included in POM.xml

**How to view test cases:** Please open file searchWeatherCity.feature at:

    searchWeather/resources/Feature/searchWeatherCity.feature  
            You can change parameters that placed in the "" of feature file
            
**How to run test:** Please run as "JUnit Test"  from callAPIRunner.java in below path:

    searchWeather/src/main/java/runner/callAPIRunner.java
    
**How to modify API URLs:** Please check file Configuration.properties in below path

    searchWeather/configs/Configuration.properties 
    
**How to modify test data like City Name, State Code, API key:** Please edit testData.xlsx file at:

    searchWeather/resources/TestData/testData.xlsx
    
**How to check test Reports after test:** Please check different report types at:

    searchWeather/target/cucumber-reports/