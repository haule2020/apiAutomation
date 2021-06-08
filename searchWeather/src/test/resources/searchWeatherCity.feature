Feature: Search weather by City Name and State code 

	Description: When I search a city by inputing city name and State code as below format:
	api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key},
	I want to get weather information response of that city 
		
Scenario Outline: Search weather by invalid cityName 
	Given I search with invalid "<cityName>" and "<stateCode>" and "<apiKey>" 
	Then Status code response "<statusCode>" should be not found 
	Examples: 
		|cityName		|stateCode	|apiKey								|statusCode	|
		|London123		|GB			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|123 New york	|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|1New york2		|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|London%		|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|	?			|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|	%			|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|				|US			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		
Scenario Outline: Search weather with invalid State code 
	Given I search with "<cityName>" and "<stateCode>" and invalid State code "<apiKey>" 
	Then Status code response should be "<statusCode>" 
	
	Examples: 
		|cityName	|stateCode	|apiKey								|statusCode	|
		|London		|London		|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|New york	|GB			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|New york	|VN			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|London		|GB%%		|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|London		|CAN		|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		|London		|			|b0a9c8b82f8361b93ce4290a8068f35b	|404		|
		
		
Scenario Outline: Search weather with invalid apiKey 
	Given I search with "<cityName>" and State code "<stateCode>" and invalid "<apiKey>" 
	Then Status code response should be "<statusCode>" authentication failed 
	
	Examples: 
		|cityName	|stateCode	|apiKey		|statusCode	|
		|London		|GB			|wert		|	401		|	
		|New york	|US			|			|	401		|
		
		
Scenario Outline: Search weather by valid parameters with GET method 
	When I search with valid parameters "<cityName>" , "<stateCode>" , "<apiKey>" 
	Then I can search successfully with status code "<statusCode>" 
	
	Examples: 
		|cityName	|stateCode	|apiKey								|statusCode	|
		|London		|GB			|b0a9c8b82f8361b93ce4290a8068f35b	|200		|		
		|New york	|US			|b0a9c8b82f8361b93ce4290a8068f35b	|200		|
		
		
Scenario Outline: Verify schemas and data type in response body 
	Given I performed search with valid parameters "<cityName>" , "<stateCode>" , "<apiKey>" 
	Then I can get correct response fields 
	And  get the data in COORD field 
	And  get the data in WEATHER field 
	And  get the data in BASE field 
	And  get the data in MAIN field 
	And  get the data in VISIBILITY field 
	And  get the data in CLOUDS field 
	And  get the valid country code in SYS field "<stateCode>" 
	When I check data in NAME field 
	Then NAME value should be semilar to the CityName parameter "<cityName>" 
	
	Examples: 
		|cityName	|stateCode	|apiKey								|statusCode	|
		|London		|GB			|b0a9c8b82f8361b93ce4290a8068f35b	|200		|		
		|New york	|US			|b0a9c8b82f8361b93ce4290a8068f35b	|200		|		 
		
		
		
Scenario Outline: Verify response time 
	Given I call the API with parameters "<cityName>" , "<stateCode>" , "<apiKey>" 
	Then response time should not exceed "9000" miliseconds
	
	Examples: 
		|cityName	|stateCode	|apiKey								|
		|London		|GB			|b0a9c8b82f8361b93ce4290a8068f35b	|	
		|New york	|US			|b0a9c8b82f8361b93ce4290a8068f35b	|