Feature: Search weather by City Name and State code

	Description: When I search a city by inputing city name and State code as below format:
	api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key},
	I want to get weather information response of that city 
		

Scenario: Search weather by invalid City name
 Given I search with invalid City name
 Then Status code response should be "404" not found
 
 Scenario: Search weather by valid City name and invalid State code
 Given I search with valid City name and invalid State code
 Then Status code response should be "404"
 
Scenario: Search weather by valid city name and invalid API key
 When I search with valid City name and invalid API key
 Then I should get respose code "401"

 Scenario: Search weather by valid parameters with GET method
 When I search with valid parameters
 Then I can search successfully with status code "200"
 
Scenario: Search weather with POST method
 When I search with with POST method
 Then API called successfully

Scenario: Verify header 
 Given I call API successfully
 Then response header with correct content type "application/json; charset=utf-8"
 And  response header with correct server name "openresty"

 Scenario: Verify schemas and data type in response body
 Given I performed search city successfully with status code "200"
 Then I can get correct response fields
 And  get the data in COORD field
 And  get the data in WEATHER field
 And  get the data in BASE field
 And  get the data in MAIN field
 And  get the data in VISIBILITY field
 And  get the data in CLOUDS field
 And  get the valid country code in SYS field
 When I check data in NAME field
 Then NAME value should be semilar to the CityName parameter

 Scenario: Verify response time
 Given I call the API
 Then response time should not exceed "9000" miliseconds
