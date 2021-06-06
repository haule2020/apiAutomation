$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/searchWeatherCity.feature");
formatter.feature({
  "line": 1,
  "name": "Search weather by City Name and State code",
  "description": "\nDescription: When I search a city by inputing city name and State code as below format:\napi.openweathermap.org/data/2.5/weather?q\u003d{city name},{state code}\u0026appid\u003d{API key},\nI want to get weather information response of that city",
  "id": "search-weather-by-city-name-and-state-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"\u003ccityName\u003e\" and \"\u003cstateCode\u003e\" and \"\u003capiKey\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"\u003cstatusCode\u003e\" should be not found",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey",
        "statusCode"
      ],
      "line": 11,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;1"
    },
    {
      "cells": [
        "London123",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 12,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;2"
    },
    {
      "cells": [
        "123 New york",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 13,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;3"
    },
    {
      "cells": [
        "1New york2",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 14,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;4"
    },
    {
      "cells": [
        "London%",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 15,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;5"
    },
    {
      "cells": [
        "?",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 16,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;6"
    },
    {
      "cells": [
        "%",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 17,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;7"
    },
    {
      "cells": [
        "",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 18,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"London123\" and \"GB\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London123",
      "offset": 23
    },
    {
      "val": "GB",
      "offset": 39
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 48
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 2308449300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 1540100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"123 New york\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123 New york",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 42
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 51
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 296210900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 149800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"1New york2\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1New york2",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 40
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 49
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 754353400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"London%\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London%",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 37
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 46
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 749195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 103400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"?\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "?",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 31
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 40
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 792756400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 254200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"%\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "%",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 31
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 40
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 230263500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 168900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search weather by invalid cityName",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-cityname;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I search with invalid \"\" and \"US\" and \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code response \"404\" should be not found",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "US",
      "offset": 30
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 39
    }
  ],
  "location": "NegativeSearch.iSearchWithInvalidAndAnd(String,String,String)"
});
formatter.result({
  "duration": 285137900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeNotFound(String)"
});
formatter.result({
  "duration": 409300,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBeNotFound(NegativeSearch.java:34)\r\n\tat ✽.Then Status code response \"404\" should be not found(src/test/resources/searchWeatherCity.feature:9)\r\n",
  "status": "failed"
});
});