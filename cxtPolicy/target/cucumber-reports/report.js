$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/policyEnquery.feature");
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
  "duration": 2891888900,
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
  "duration": 942595300,
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
  "duration": 1476899,
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
  "duration": 403094001,
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
  "duration": 514023999,
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
  "duration": 184100,
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
  "duration": 283356499,
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
  "duration": 432381100,
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
  "duration": 134200,
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
  "duration": 387320400,
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
  "duration": 823237400,
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
  "duration": 194999,
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
  "duration": 443682600,
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
  "duration": 663322599,
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
  "duration": 444901,
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
  "duration": 1115242001,
  "status": "passed"
});
formatter.match({
  "location": "VerifyResponseFields.iCanGetCorrectResponseFieldName()"
});
formatter.result({
  "duration": 60964899,
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
  "duration": 938792001,
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
  "duration": 4373500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectExcludeInfo()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectBancaInd()"
});
formatter.result({
  "duration": 19700,
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
  "duration": 61200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentMobile()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentName()"
});
formatter.result({
  "duration": 19999,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectLocationCode()"
});
formatter.result({
  "duration": 17299,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectGracePeriod()"
});
formatter.result({
  "duration": 20499,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectOstPrem()"
});
formatter.result({
  "duration": 17300,
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
  "duration": 970001000,
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
  "duration": 5713600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectExcludeInfo()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectBancaInd()"
});
formatter.result({
  "duration": 12500,
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
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentMobile()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectAgentName()"
});
formatter.result({
  "duration": 12500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectLocationCode()"
});
formatter.result({
  "duration": 57401,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectGracePeriod()"
});
formatter.result({
  "duration": 14900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICYItems.iGetCorrectOstPrem()"
});
formatter.result({
  "duration": 11701,
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
  "duration": 969723099,
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
  "duration": 122100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientName()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdNumber()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssueDate()"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssuePlace()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectSexCode()"
});
formatter.result({
  "duration": 33699,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectBirthdate()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectVipInd()"
});
formatter.result({
  "duration": 17000,
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
  "duration": 977622600,
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
  "duration": 104999,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectClientName()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdNumber()"
});
formatter.result({
  "duration": 11200,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssueDate()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectIdIssuePlace()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectSexCode()"
});
formatter.result({
  "duration": 14399,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectBirthdate()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyPOLICY_OWNER.iGetCorrectVipInd()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Verify response time",
  "description": "",
  "id": "search-policy-infomation;verify-response-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I call the API \"\u003cpolicyNumber\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "response time should not exceed \"\u003cresponseTime\u003e\" miliseconds",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "search-policy-infomation;verify-response-time;",
  "rows": [
    {
      "cells": [
        "policyNumber",
        "responseTime"
      ],
      "line": 71,
      "id": "search-policy-infomation;verify-response-time;;1"
    },
    {
      "cells": [
        "2816548240",
        "9000"
      ],
      "line": 72,
      "id": "search-policy-infomation;verify-response-time;;2"
    },
    {
      "cells": [
        "2871284582",
        "9000"
      ],
      "line": 73,
      "id": "search-policy-infomation;verify-response-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "Verify response time",
  "description": "",
  "id": "search-policy-infomation;verify-response-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I call the API \"2816548240\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "response time should not exceed \"9000\" miliseconds",
  "matchedColumns": [
    1
  ],
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
  "duration": 299754200,
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
  "duration": 79300,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Verify response time",
  "description": "",
  "id": "search-policy-infomation;verify-response-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I call the API \"2871284582\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "response time should not exceed \"9000\" miliseconds",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2871284582",
      "offset": 16
    }
  ],
  "location": "CheckResponseTime.iCallTheAPI(String)"
});
formatter.result({
  "duration": 324657900,
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
  "duration": 115001,
  "status": "passed"
});
});