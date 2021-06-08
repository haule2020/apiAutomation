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
  "duration": 2756410700,
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
  "duration": 1205205600,
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
  "duration": 1366600,
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
  "duration": 244176200,
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
  "duration": 937296000,
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
  "duration": 88800,
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
  "duration": 255199600,
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
  "duration": 512694800,
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
  "duration": 155400,
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
formatter.result({
  "duration": 236007100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 54
    }
  ],
  "location": "SearchByValidParameters.iCallAPIToSearchByInputingValidPolicyNumber(String)"
});
formatter.result({
  "duration": 627851600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "SearchByValidParameters.systemResponseWithStatusCode(String)"
});
formatter.result({
  "duration": 275400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search policy infomation by valid policy number",
  "description": "",
  "id": "search-policy-infomation;search-policy-infomation-by-valid-policy-number;;3",
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
  "name": "I call API to search by inputing valid policy number \"2871284582\"",
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
formatter.result({
  "duration": 237521700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 54
    }
  ],
  "location": "SearchByValidParameters.iCallAPIToSearchByInputingValidPolicyNumber(String)"
});
formatter.result({
  "duration": 1307455000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "SearchByValidParameters.systemResponseWithStatusCode(String)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify field name in response body",
  "description": "",
  "id": "search-policy-infomation;verify-field-name-in-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I search policy successfully \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I can get correct response field name",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-field-name-in-response-body;",
  "rows": [
    {
      "cells": [
        "policyNumber"
      ],
      "line": 32,
      "id": "search-policy-infomation;verify-field-name-in-response-body;;1"
    },
    {
      "cells": [
        "2816548240"
      ],
      "line": 33,
      "id": "search-policy-infomation;verify-field-name-in-response-body;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Verify field name in response body",
  "description": "",
  "id": "search-policy-infomation;verify-field-name-in-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I search policy successfully \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I can get correct response field name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 30
    }
  ],
  "location": "VerifyResponseFields.iSearchPolicySuccessfully(String)"
});
formatter.result({
  "duration": 1041503300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResponseFields.iCanGetCorrectResponseFieldName()"
});
formatter.result({
  "duration": 51250400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Verify POLICY items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-items-from-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I can search a policy \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I get correct policyNumber \"\u003cpolicyNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I get correct excludeInfo",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get correct bancaInd",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I get correct agentCode \"\u003cagentCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I get correct agentMobile",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I get correct agentName",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I get correct locationCode",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I get correct gracePeriod",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get correct ostPrem",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-policy-items-from-response-body;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "agentCode"
      ],
      "line": 47,
      "id": "search-policy-infomation;verify-policy-items-from-response-body;;1"
    },
    {
      "cells": [
        "2816548240",
        "SS029"
      ],
      "line": 48,
      "id": "search-policy-infomation;verify-policy-items-from-response-body;;2"
    },
    {
      "cells": [
        "2871284582",
        "FT487"
      ],
      "line": 49,
      "id": "search-policy-infomation;verify-policy-items-from-response-body;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Verify POLICY items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-items-from-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I can search a policy \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I get correct policyNumber \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I get correct excludeInfo",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get correct bancaInd",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I get correct agentCode \"SS029\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I get correct agentMobile",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I get correct agentName",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I get correct locationCode",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I get correct gracePeriod",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get correct ostPrem",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 23
    }
  ],
  "location": "VerifyPOLICYItems.iCanSearchAPolicy(String)"
});
formatter.result({
  "duration": 1021451100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 28
    }
  ],
  "location": "VerifyPOLICYItems.iGetCorrectPolicyNumber(String)"
});
formatter.result({
  "duration": 4672100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectExcludeInfo()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectBancaInd()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS029",
      "offset": 25
    }
  ],
  "location": "VerifyPOLICYItems.iGetCorrectAgentCode(String)"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentMobile()"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentName()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectLocationCode()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectGracePeriod()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectOstPrem()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify POLICY items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-items-from-response-body;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I can search a policy \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I get correct policyNumber \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I get correct excludeInfo",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get correct bancaInd",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I get correct agentCode \"FT487\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I get correct agentMobile",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I get correct agentName",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I get correct locationCode",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I get correct gracePeriod",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get correct ostPrem",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 23
    }
  ],
  "location": "VerifyPOLICYItems.iCanSearchAPolicy(String)"
});
formatter.result({
  "duration": 2155551400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 28
    }
  ],
  "location": "VerifyPOLICYItems.iGetCorrectPolicyNumber(String)"
});
formatter.result({
  "duration": 6510600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectExcludeInfo()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectBancaInd()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FT487",
      "offset": 25
    }
  ],
  "location": "VerifyPOLICYItems.iGetCorrectAgentCode(String)"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentMobile()"
});
formatter.result({
  "duration": 12300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentName()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectLocationCode()"
});
formatter.result({
  "duration": 11300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectGracePeriod()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectOstPrem()"
});
formatter.result({
  "duration": 13600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Verify POLICY_OWNER items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-owner-items-from-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I search a policy \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I get correct clientNumber \"\u003cclientNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I get correct clientName",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I get correct idNumber",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I get correct idIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I get correct idIssuePlace",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I get correct sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get correct birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I get correct vipInd",
  "keyword": "And "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "clientNumber"
      ],
      "line": 63,
      "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;;1"
    },
    {
      "cells": [
        "2816548240",
        "2802978231"
      ],
      "line": 64,
      "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;;2"
    },
    {
      "cells": [
        "2871284582",
        "2805363580"
      ],
      "line": 65,
      "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Verify POLICY_OWNER items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I search a policy \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I get correct clientNumber \"2802978231\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I get correct clientName",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I get correct idNumber",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I get correct idIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I get correct idIssuePlace",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I get correct sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get correct birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I get correct vipInd",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 19
    }
  ],
  "location": "VerifyPOLICY_OWNER.iSearchAPolicy(String)"
});
formatter.result({
  "duration": 839968500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2802978231",
      "offset": 28
    }
  ],
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientNumber(String)"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientName()"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdNumber()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssueDate()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssuePlace()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectSexCode()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectBirthdate()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectVipInd()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify POLICY_OWNER items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-owner-items-from-response-body;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I search a policy \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I get correct clientNumber \"2805363580\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I get correct clientName",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I get correct idNumber",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I get correct idIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I get correct idIssuePlace",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I get correct sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get correct birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I get correct vipInd",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 19
    }
  ],
  "location": "VerifyPOLICY_OWNER.iSearchAPolicy(String)"
});
formatter.result({
  "duration": 2941643700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2805363580",
      "offset": 28
    }
  ],
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientNumber(String)"
});
formatter.result({
  "duration": 128500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientName()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdNumber()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssueDate()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssuePlace()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectSexCode()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectBirthdate()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectVipInd()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Verify COVERAGES items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-coverages-items-from-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I can search policy\u0027s COVERAGES \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I get coverageEffectiveDate \"\u003ccoverageEffectiveDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I get coverageIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I get coverageXpryDate",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I get coverageCode",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I get mcStatusCode \"\u003cmcStatusCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I get mcEffectiveDate",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I get coverageClass",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I get coverageStatusCode \"\u003ccoverageStatusCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I get coveragePrem;",
  "keyword": "And "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-coverages-items-from-response-body;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "coverageEffectiveDate",
        "coverageStatusCode",
        "mcStatusCode"
      ],
      "line": 80,
      "id": "search-policy-infomation;verify-coverages-items-from-response-body;;1"
    },
    {
      "cells": [
        "2816548240",
        "20171231",
        "I",
        "I"
      ],
      "line": 81,
      "id": "search-policy-infomation;verify-coverages-items-from-response-body;;2"
    },
    {
      "cells": [
        "2871284582",
        "20210327",
        "N",
        ""
      ],
      "line": 82,
      "id": "search-policy-infomation;verify-coverages-items-from-response-body;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 81,
  "name": "Verify COVERAGES items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-coverages-items-from-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I can search policy\u0027s COVERAGES \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I get coverageEffectiveDate \"20171231\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I get coverageIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I get coverageXpryDate",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I get coverageCode",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I get mcStatusCode \"I\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I get mcEffectiveDate",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I get coverageClass",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I get coverageStatusCode \"I\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I get coveragePrem;",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 33
    }
  ],
  "location": "VerifyCOVERAGES.iCanSearchPolicySCOVERAGES(String)"
});
formatter.result({
  "duration": 1006344600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20171231",
      "offset": 29
    }
  ],
  "location": "VerifyCOVERAGES.iGetCoverageEffectiveDate(String)"
});
formatter.result({
  "duration": 142700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageIssueDate()"
});
formatter.result({
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageXpryDate()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageCode()"
});
formatter.result({
  "duration": 49700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I",
      "offset": 20
    }
  ],
  "location": "VerifyCOVERAGES.iGetMcStatusCode(String)"
});
formatter.result({
  "duration": 86900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetMcEffectiveDate()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageClass()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I",
      "offset": 26
    }
  ],
  "location": "VerifyCOVERAGES.iGetCoverageStatusCode(String)"
});
formatter.result({
  "duration": 74700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoveragePrem()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Verify COVERAGES items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-coverages-items-from-response-body;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I can search policy\u0027s COVERAGES \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I get coverageEffectiveDate \"20210327\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I get coverageIssueDate",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I get coverageXpryDate",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I get coverageCode",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I get mcStatusCode \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I get mcEffectiveDate",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I get coverageClass",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I get coverageStatusCode \"N\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I get coveragePrem;",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 33
    }
  ],
  "location": "VerifyCOVERAGES.iCanSearchPolicySCOVERAGES(String)"
});
formatter.result({
  "duration": 1625882600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210327",
      "offset": 29
    }
  ],
  "location": "VerifyCOVERAGES.iGetCoverageEffectiveDate(String)"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageIssueDate()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageXpryDate()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageCode()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "VerifyCOVERAGES.iGetMcStatusCode(String)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetMcEffectiveDate()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoverageClass()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 26
    }
  ],
  "location": "VerifyCOVERAGES.iGetCoverageStatusCode(String)"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCOVERAGES.iGetCoveragePrem()"
});
formatter.result({
  "duration": 11400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Verify POLICY_INS items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-ins-items-from-response-body",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I can get response of policyNumber \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I get clientNumber \"\u003cclientNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "I get clientName",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I get birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I get sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I get idNumber",
  "keyword": "And "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "clientNumber"
      ],
      "line": 94,
      "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;;1"
    },
    {
      "cells": [
        "2816548240",
        "2801422092"
      ],
      "line": 95,
      "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;;2"
    },
    {
      "cells": [
        "2871284582",
        "2805363580"
      ],
      "line": 96,
      "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 95,
  "name": "Verify POLICY_INS items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I can get response of policyNumber \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I get clientNumber \"2801422092\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "I get clientName",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I get birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I get sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I get idNumber",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 36
    }
  ],
  "location": "VerifyPOLICY_INS.iCanGetResponseOfPolicyNumber(String)"
});
formatter.result({
  "duration": 1416222100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2801422092",
      "offset": 20
    }
  ],
  "location": "VerifyPOLICY_INS.iGetClientNumber(String)"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetClientName()"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetBirthdate()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetSexCode()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetIdNumber()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Verify POLICY_INS items from response body",
  "description": "",
  "id": "search-policy-infomation;verify-policy-ins-items-from-response-body;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "I can get response of policyNumber \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I get clientNumber \"2805363580\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "I get clientName",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I get birthdate",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I get sexCode",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I get idNumber",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 36
    }
  ],
  "location": "VerifyPOLICY_INS.iCanGetResponseOfPolicyNumber(String)"
});
formatter.result({
  "duration": 3727803700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2805363580",
      "offset": 20
    }
  ],
  "location": "VerifyPOLICY_INS.iGetClientNumber(String)"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetClientName()"
});
formatter.result({
  "duration": 13500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetBirthdate()"
});
formatter.result({
  "duration": 12000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetSexCode()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_INS.iGetIdNumber()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 99,
  "name": "Token  Validation",
  "description": "",
  "id": "search-policy-infomation;token--validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "I search policyNumber \"\u003cpolicyNumber\u003e\" with invalid token \"\u003ctoken\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "I get statusCode \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I get error message \"\u003cerrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 104,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;token--validation;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "token",
        "statusCode",
        "errorMessage"
      ],
      "line": 106,
      "id": "search-policy-infomation;token--validation;;1"
    },
    {
      "cells": [
        "2816548240",
        "asCDDgdafshgbb,ki",
        "401",
        "invalid_token"
      ],
      "line": 107,
      "id": "search-policy-infomation;token--validation;;2"
    },
    {
      "cells": [
        "2871284582",
        "%",
        "401",
        "Invalid_token"
      ],
      "line": 108,
      "id": "search-policy-infomation;token--validation;;3"
    },
    {
      "cells": [
        "2871284582",
        "",
        "400",
        "Invalid_request"
      ],
      "line": 109,
      "id": "search-policy-infomation;token--validation;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 107,
  "name": "Token  Validation",
  "description": "",
  "id": "search-policy-infomation;token--validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "I search policyNumber \"2816548240\" with invalid token \"asCDDgdafshgbb,ki\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "I get statusCode \"401\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I get error message \"invalid_token\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 23
    },
    {
      "val": "asCDDgdafshgbb,ki",
      "offset": 55
    }
  ],
  "location": "TokenValidations.iSearchPolicyNumberWithInvalidToken(String,String)"
});
formatter.result({
  "duration": 278053800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 18
    }
  ],
  "location": "TokenValidations.iGetStatusCode(int)"
});
formatter.result({
  "duration": 1031800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid_token",
      "offset": 21
    }
  ],
  "location": "TokenValidations.iGetErrorMessage(String)"
});
formatter.result({
  "duration": 22020100,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Token  Validation",
  "description": "",
  "id": "search-policy-infomation;token--validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "I search policyNumber \"2871284582\" with invalid token \"%\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "I get statusCode \"401\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I get error message \"Invalid_token\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 23
    },
    {
      "val": "%",
      "offset": 55
    }
  ],
  "location": "TokenValidations.iSearchPolicyNumberWithInvalidToken(String,String)"
});
formatter.result({
  "duration": 563214500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 18
    }
  ],
  "location": "TokenValidations.iGetStatusCode(int)"
});
formatter.result({
  "duration": 188500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_token",
      "offset": 21
    }
  ],
  "location": "TokenValidations.iGetErrorMessage(String)"
});
formatter.result({
  "duration": 9355000,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Token  Validation",
  "description": "",
  "id": "search-policy-infomation;token--validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "I search policyNumber \"2871284582\" with invalid token \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "I get statusCode \"400\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I get error message \"Invalid_request\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 23
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "TokenValidations.iSearchPolicyNumberWithInvalidToken(String,String)"
});
formatter.result({
  "duration": 291457800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 18
    }
  ],
  "location": "TokenValidations.iGetStatusCode(int)"
});
formatter.result({
  "duration": 183600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_request",
      "offset": 21
    }
  ],
  "location": "TokenValidations.iGetErrorMessage(String)"
});
formatter.result({
  "duration": 14754600,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Verify response time",
  "description": "",
  "id": "search-policy-infomation;verify-response-time",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 112,
  "name": "I call the API \"2816548240\"",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "response time should not exceed \"9000\" miliseconds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2816548240",
      "offset": 16
    }
  ],
  "location": "CheckResponseTime.iCallTheAPI(String)"
});
formatter.result({
  "duration": 319392900,
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
  "duration": 98400,
  "status": "passed"
});
});