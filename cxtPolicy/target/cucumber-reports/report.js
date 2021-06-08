$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/policyEnquery.feature");
formatter.feature({
  "line": 1,
  "name": "Search policy infomation",
  "description": "\nDescription: When I search policy information with search keywork is policy number\nI want to get all required fields of that policy",
  "id": "search-policy-infomation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search policy infomation by invalid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I call API to search by inputing invalid policy number \"\u003cpolicyNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "system response no content with status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "statusCode"
      ],
      "line": 12,
      "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;1"
    },
    {
      "cells": [
        "2816548240%",
        "204"
      ],
      "line": 13,
      "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;2"
    },
    {
      "cells": [
        "%2816548240%",
        "204"
      ],
      "line": 14,
      "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;3"
    },
    {
      "cells": [
        "",
        "204"
      ],
      "line": 15,
      "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search policy infomation by invalid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I call API to search by inputing invalid policy number \"2816548240%\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "system response no content with status code \"204\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 2898231300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240%",
      "offset": 56
    }
  ],
  "location": "NegativeSearch.iCallAPIToSearchByInputingInvalidPolicyNumber(String)"
});
formatter.result({
  "duration": 891996200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 45
    }
  ],
  "location": "NegativeSearch.systemResponseNoContentWithStatusCode(String)"
});
formatter.result({
  "duration": 2324500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search policy infomation by invalid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I call API to search by inputing invalid policy number \"%2816548240%\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "system response no content with status code \"204\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 332381100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%2816548240%",
      "offset": 56
    }
  ],
  "location": "NegativeSearch.iCallAPIToSearchByInputingInvalidPolicyNumber(String)"
});
formatter.result({
  "duration": 389400800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 45
    }
  ],
  "location": "NegativeSearch.systemResponseNoContentWithStatusCode(String)"
});
formatter.result({
  "duration": 144300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search policy infomation by invalid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-invalid-policy-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I call API to search by inputing invalid policy number \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "system response no content with status code \"204\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NegativeSearch.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 326004300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 56
    }
  ],
  "location": "NegativeSearch.iCallAPIToSearchByInputingInvalidPolicyNumber(String)"
});
formatter.result({
  "duration": 386330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 45
    }
  ],
  "location": "NegativeSearch.systemResponseNoContentWithStatusCode(String)"
});
formatter.result({
  "duration": 143300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Search policy infomation by valid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I already get authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I call API to search by inputing valid policy number \"\u003cpolicyNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "system response with status code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "statusCode"
      ],
      "line": 23,
      "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;;1"
    },
    {
      "cells": [
        "2816548240",
        "200"
      ],
      "line": 24,
      "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;;2"
    },
    {
      "cells": [
        "2871284582",
        "200"
      ],
      "line": 25,
      "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Search policy infomation by valid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I already get authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I call API to search by inputing valid policy number \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "system response with status code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByValidParameters.iAlreadyAuthorozied()"
});
