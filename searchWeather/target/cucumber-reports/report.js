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
  "duration": 2228114100,
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
  "duration": 1805100,
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
  "duration": 317521200,
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
  "duration": 141900,
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
  "duration": 291675800,
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
  "duration": 107000,
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
  "duration": 283168700,
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
  "duration": 72800,
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
  "duration": 283212200,
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
  "duration": 55200,
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
  "duration": 232468100,
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
  "duration": 153500,
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
  "duration": 283775500,
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
  "duration": 1377900,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBeNotFound(NegativeSearch.java:27)\r\n\tat ✽.Then Status code response \"404\" should be not found(src/test/resources/searchWeatherCity.feature:9)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"\u003ccityName\u003e\" and \"\u003cstateCode\u003e\" and invalid State code \"\u003capiKey\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey",
        "statusCode"
      ],
      "line": 25,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;1"
    },
    {
      "cells": [
        "London",
        "London",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 26,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;2"
    },
    {
      "cells": [
        "New york",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 27,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;3"
    },
    {
      "cells": [
        "New york",
        "VN",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 28,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;4"
    },
    {
      "cells": [
        "London",
        "GB%%",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 29,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;5"
    },
    {
      "cells": [
        "London",
        "CAN",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 30,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;6"
    },
    {
      "cells": [
        "London",
        "",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "404"
      ],
      "line": 31,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"London\" and \"London\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    },
    {
      "val": "London",
      "offset": 28
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 60
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 281566000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 593500,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBe(NegativeSearch.java:38)\r\n\tat ✽.Then Status code response should be \"404\"(src/test/resources/searchWeatherCity.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"New york\" and \"GB\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 15
    },
    {
      "val": "GB",
      "offset": 30
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 58
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 320683500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 517500,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBe(NegativeSearch.java:38)\r\n\tat ✽.Then Status code response should be \"404\"(src/test/resources/searchWeatherCity.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"New york\" and \"VN\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 15
    },
    {
      "val": "VN",
      "offset": 30
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 58
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 247050700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"London\" and \"GB%%\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    },
    {
      "val": "GB%%",
      "offset": 28
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 58
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 288496500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 576600,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBe(NegativeSearch.java:38)\r\n\tat ✽.Then Status code response should be \"404\"(src/test/resources/searchWeatherCity.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 30,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"London\" and \"CAN\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    },
    {
      "val": "CAN",
      "offset": 28
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 57
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 280262100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 277600,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBe(NegativeSearch.java:38)\r\n\tat ✽.Then Status code response should be \"404\"(src/test/resources/searchWeatherCity.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Search weather with invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-state-code;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I search with \"London\" and \"\" and invalid State code \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Status code response should be \"404\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    },
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 54
    }
  ],
  "location": "NegativeSearch.iSearchWithAndAndInvalidStateCode(String,String,String)"
});
formatter.result({
  "duration": 221854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBe(String)"
});
formatter.result({
  "duration": 253500,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.statusCodeResponseShouldBe(NegativeSearch.java:38)\r\n\tat ✽.Then Status code response should be \"404\"(src/test/resources/searchWeatherCity.feature:22)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Search weather with invalid apiKey",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I search with \"\u003ccityName\u003e\" and State code \"\u003cstateCode\u003e\" and invalid \"\u003capiKey\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Status code response should be \"\u003cstatusCode\u003e\" authentication failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey",
        "statusCode"
      ],
      "line": 39,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;;1"
    },
    {
      "cells": [
        "London",
        "GB",
        "wert",
        "401"
      ],
      "line": 40,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;;2"
    },
    {
      "cells": [
        "New york",
        "US",
        "",
        "401"
      ],
      "line": 41,
      "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Search weather with invalid apiKey",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I search with \"London\" and State code \"GB\" and invalid \"wert\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Status code response should be \"401\" authentication failed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    },
    {
      "val": "GB",
      "offset": 39
    },
    {
      "val": "wert",
      "offset": 56
    }
  ],
  "location": "NegativeSearch.iSearchWithAndStateCodeAndInvalid(String,String,String)"
});
formatter.result({
  "duration": 282812100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeAuthenticationFailed(String)"
});
formatter.result({
  "duration": 110400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search weather with invalid apiKey",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-invalid-apikey;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I search with \"New york\" and State code \"US\" and invalid \"\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Status code response should be \"401\" authentication failed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 15
    },
    {
      "val": "US",
      "offset": 41
    },
    {
      "val": "",
      "offset": 58
    }
  ],
  "location": "NegativeSearch.iSearchWithAndStateCodeAndInvalid(String,String,String)"
});
formatter.result({
  "duration": 289868700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.statusCodeResponseShouldBeAuthenticationFailed(String)"
});
formatter.result({
  "duration": 132900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Search weather by valid parameters with GET method",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I search with valid parameters \"\u003ccityName\u003e\" , \"\u003cstateCode\u003e\" , \"\u003capiKey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I can search successfully with status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey",
        "statusCode"
      ],
      "line": 49,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;;1"
    },
    {
      "cells": [
        "London",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "200"
      ],
      "line": 50,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;;2"
    },
    {
      "cells": [
        "New york",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "200"
      ],
      "line": 51,
      "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "Search weather by valid parameters with GET method",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I search with valid parameters \"London\" , \"GB\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I can search successfully with status code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 32
    },
    {
      "val": "GB",
      "offset": 43
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 50
    }
  ],
  "location": "SearchByValidParameters.iSearchWithValidParameters(String,String,String)"
});
formatter.result({
  "duration": 228397700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "SearchByValidParameters.iCanSearchSuccessfullyWithStatusCode(String)"
});
formatter.result({
  "duration": 165000,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Search weather by valid parameters with GET method",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I search with valid parameters \"New york\" , \"US\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I can search successfully with status code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 32
    },
    {
      "val": "US",
      "offset": 45
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 52
    }
  ],
  "location": "SearchByValidParameters.iSearchWithValidParameters(String,String,String)"
});
formatter.result({
  "duration": 293673000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "SearchByValidParameters.iCanSearchSuccessfullyWithStatusCode(String)"
});
formatter.result({
  "duration": 141400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Verify schemas and data type in response body",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I performed search with valid parameters \"\u003ccityName\u003e\" , \"\u003cstateCode\u003e\" , \"\u003capiKey\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can get correct response fields",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "get the data in COORD field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "get the data in WEATHER field",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "get the data in BASE field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "get the data in MAIN field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "get the data in VISIBILITY field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "get the data in CLOUDS field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "get the valid country code in SYS field \"\u003cstateCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I check data in NAME field",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "NAME value should be semilar to the CityName parameter \"\u003ccityName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey",
        "statusCode"
      ],
      "line": 68,
      "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;;1"
    },
    {
      "cells": [
        "London",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "200"
      ],
      "line": 69,
      "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;;2"
    },
    {
      "cells": [
        "New york",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b",
        "200"
      ],
      "line": 70,
      "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Verify schemas and data type in response body",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I performed search with valid parameters \"London\" , \"GB\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can get correct response fields",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "get the data in COORD field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "get the data in WEATHER field",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "get the data in BASE field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "get the data in MAIN field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "get the data in VISIBILITY field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "get the data in CLOUDS field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "get the valid country code in SYS field \"GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I check data in NAME field",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "NAME value should be semilar to the CityName parameter \"London\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 42
    },
    {
      "val": "GB",
      "offset": 53
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 60
    }
  ],
  "location": "VerifyResonseData.iPerformedSearchWithValidParameters(String,String,String)"
});
formatter.result({
  "duration": 232125500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_can_get_correct_response_fields()"
});
formatter.result({
  "duration": 342953400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_COORD_field()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_WEATHER_field()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_BASE_field()"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_MAIN_field()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_VISIBILITY_field()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_CLOUDS_field()"
});
formatter.result({
  "duration": 21700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GB",
      "offset": 41
    }
  ],
  "location": "VerifyResonseData.getTheValidCountryCodeInSYSField(String)"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_check_data_in_NAME_field()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 56
    }
  ],
  "location": "VerifyResonseData.nameValueShouldBeSemilarToTheCityNameParameter(String)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Verify schemas and data type in response body",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I performed search with valid parameters \"New york\" , \"US\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I can get correct response fields",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "get the data in COORD field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "get the data in WEATHER field",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "get the data in BASE field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "get the data in MAIN field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "get the data in VISIBILITY field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "get the data in CLOUDS field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "get the valid country code in SYS field \"US\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I check data in NAME field",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "NAME value should be semilar to the CityName parameter \"New york\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 42
    },
    {
      "val": "US",
      "offset": 55
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 62
    }
  ],
  "location": "VerifyResonseData.iPerformedSearchWithValidParameters(String,String,String)"
});
formatter.result({
  "duration": 299559800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_can_get_correct_response_fields()"
});
formatter.result({
  "duration": 3993100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_COORD_field()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_WEATHER_field()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_BASE_field()"
});
formatter.result({
  "duration": 11300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_MAIN_field()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_VISIBILITY_field()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_CLOUDS_field()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 41
    }
  ],
  "location": "VerifyResonseData.getTheValidCountryCodeInSYSField(String)"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_check_data_in_NAME_field()"
});
formatter.result({
  "duration": 10500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 56
    }
  ],
  "location": "VerifyResonseData.nameValueShouldBeSemilarToTheCityNameParameter(String)"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Verify response time",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-response-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I call the API with parameters \"\u003ccityName\u003e\" , \"\u003cstateCode\u003e\" , \"\u003capiKey\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "response time should not exceed \"9000\" miliseconds",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-response-time;",
  "rows": [
    {
      "cells": [
        "cityName",
        "stateCode",
        "apiKey"
      ],
      "line": 79,
      "id": "search-weather-by-city-name-and-state-code;verify-response-time;;1"
    },
    {
      "cells": [
        "London",
        "GB",
        "b0a9c8b82f8361b93ce4290a8068f35b"
      ],
      "line": 80,
      "id": "search-weather-by-city-name-and-state-code;verify-response-time;;2"
    },
    {
      "cells": [
        "New york",
        "US",
        "b0a9c8b82f8361b93ce4290a8068f35b"
      ],
      "line": 81,
      "id": "search-weather-by-city-name-and-state-code;verify-response-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Verify response time",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-response-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I call the API with parameters \"London\" , \"GB\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "response time should not exceed \"9000\" miliseconds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 32
    },
    {
      "val": "GB",
      "offset": 43
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 50
    }
  ],
  "location": "CheckResponseTime.iCallTheAPIWithParameters(String,String,String)"
});
formatter.result({
  "duration": 290891900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 33
    }
  ],
  "location": "CheckResponseTime.responseTimeShouldNotExceedMiliseconds(String)"
});
formatter.result({
  "duration": 176300,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Verify response time",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-response-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I call the API with parameters \"New york\" , \"US\" , \"b0a9c8b82f8361b93ce4290a8068f35b\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "response time should not exceed \"9000\" miliseconds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New york",
      "offset": 32
    },
    {
      "val": "US",
      "offset": 45
    },
    {
      "val": "b0a9c8b82f8361b93ce4290a8068f35b",
      "offset": 52
    }
  ],
  "location": "CheckResponseTime.iCallTheAPIWithParameters(String,String,String)"
});
formatter.result({
  "duration": 595788900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 33
    }
  ],
  "location": "CheckResponseTime.responseTimeShouldNotExceedMiliseconds(String)"
});
formatter.result({
  "duration": 155800,
  "status": "passed"
});
});