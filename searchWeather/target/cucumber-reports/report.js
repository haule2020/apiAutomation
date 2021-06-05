$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Feature/searchWeatherCity.feature");
formatter.feature({
  "line": 1,
  "name": "Search weather by City Name and State code",
  "description": "\nDescription: When I search a city by inputing city name and State code as below format:\napi.openweathermap.org/data/2.5/weather?q\u003d{city name},{state code}\u0026appid\u003d{API key},\nI want to get weather information response of that city",
  "id": "search-weather-by-city-name-and-state-code",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Search weather by invalid cityName and statCode and apiKey",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname-and-statcode-and-apikey",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid cityName",
  "rows": [
    {
      "cells": [
        "Hanoi",
        "VN",
        "b0a9c8b82f8361b93ce4290a8068f35b"
      ],
      "line": 10
    },
    {
      "cells": [
        "London",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b"
      ],
      "line": 11
    },
    {
      "cells": [
        "New york",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Status code response should be 404 not found",
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.iSearchWithInvalidCityName(DataTable)"
});
formatter.result({
  "duration": 2223099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 31
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(int)"
});
formatter.result({
  "duration": 280687100,
  "status": "passed"
});
});