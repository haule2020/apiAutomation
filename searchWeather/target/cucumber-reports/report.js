$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/Feature/searchWeatherCity.feature");
formatter.feature({
  "line": 1,
  "name": "Search weather by City Name and State code",
  "description": "\r\nDescription: When I search a city by inputing city name and State code as below format:\r\napi.openweathermap.org/data/2.5/weather?q\u003d{city name},{state code}\u0026appid\u003d{API key},\r\nI want to get weather information response of that city",
  "id": "search-weather-by-city-name-and-state-code",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Search weather by invalid City name",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-invalid-city-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I search with invalid City name",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Status code response should be \"404\" not found",
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.i_search_with_invalid_City_name()"
});
formatter.result({
  "duration": 2796083200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.status_code_response_should_be_not_found(int)"
});
formatter.result({
  "duration": 3690300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search weather by valid City name and invalid State code",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-city-name-and-invalid-state-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I search with valid City name and invalid State code",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Status code response should be \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.i_search_with_valid_City_name_and_invalid_State_code()"
});
formatter.result({
  "duration": 326588400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    }
  ],
  "location": "NegativeSearch.status_code_response_should_be(int)"
});
formatter.result({
  "duration": 533200,
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.NegativeSearch.status_code_response_should_be(NegativeSearch.java:50)\r\n\tat ✽.Then Status code response should be \"404\"(resources/Feature/searchWeatherCity.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Search weather by valid city name and invalid API key",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-city-name-and-invalid-api-key",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I search with valid City name and invalid API key",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get respose code \"401\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.i_search_with_valid_City_name_and_invalid_API_key()"
});
formatter.result({
  "duration": 305727200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 27
    }
  ],
  "location": "NegativeSearch.i_should_get_respose_code(int)"
});
formatter.result({
  "duration": 189000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search weather by valid parameters with GET method",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-by-valid-parameters-with-get-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I search with valid parameters",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I can search successfully with status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByValidParameters.i_search_with_valid_parameters()"
});
formatter.result({
  "duration": 312070200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "SearchByValidParameters.i_can_search_successfully_with_status_code(int)"
});
formatter.result({
  "duration": 122200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search weather with POST method",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;search-weather-with-post-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I search with with POST method",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "API called successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByValidParameters.i_search_with_with_POST_method()"
});
formatter.result({
  "duration": 290959200,
  "status": "passed"
});
formatter.match({
  "location": "SearchByValidParameters.api_called_successfully()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify header",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I call API successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "response header with correct content type \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "response header with correct server name \"openresty\"",
  "keyword": "And "
});
formatter.match({
  "location": "CheckHeaders.i_call_API_successfully()"
});
formatter.result({
  "duration": 286701900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json; charset\u003dutf-8",
      "offset": 43
    }
  ],
  "location": "CheckHeaders.response_header_with_correct_content_type(String)"
});
formatter.result({
  "duration": 1232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "openresty",
      "offset": 42
    }
  ],
  "location": "CheckHeaders.response_header_with_correct_server_name(String)"
});
formatter.result({
  "duration": 68200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify schemas and data type in response body",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-schemas-and-data-type-in-response-body",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I performed search city successfully with status code \"200\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I can get correct response fields",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "get the data in COORD field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "get the data in WEATHER field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "get the data in BASE field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "get the data in MAIN field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "get the data in VISIBILITY field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "get the data in CLOUDS field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "get the valid country code in SYS field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I check data in NAME field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "NAME value should be semilar to the CityName parameter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 55
    }
  ],
  "location": "VerifyResonseData.i_performed_search_city_successfully_with_status_code(int)"
});
formatter.result({
  "duration": 240366400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_can_get_correct_response_fields()"
});
formatter.result({
  "duration": 481959500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_COORD_field()"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_WEATHER_field()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_BASE_field()"
});
formatter.result({
  "duration": 64200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_MAIN_field()"
});
formatter.result({
  "duration": 51400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_VISIBILITY_field()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_data_in_CLOUDS_field()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.get_the_valid_country_code_in_SYS_field()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.i_check_data_in_NAME_field()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResonseData.name_value_should_be_semilar_to_the_CityName_parameter()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify response time",
  "description": "",
  "id": "search-weather-by-city-name-and-state-code;verify-response-time",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I call the API",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "response time should not exceed \"9000\" miliseconds",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckResponseTime.i_call_the_API()"
});
formatter.result({
  "duration": 288303800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 33
    }
  ],
  "location": "CheckResponseTime.response_time_should_not_exceed_seconds(String)"
});
formatter.result({
  "duration": 263600,
  "status": "passed"
});
});