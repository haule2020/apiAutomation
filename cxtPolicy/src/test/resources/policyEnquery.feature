Feature: Search policy infomation 

Description: When I search policy information with search keywork is policy number
I want to get all required fields of that policy

Scenario Outline: Search policy infomation by invalid policy number 
	Given I already authorozied 
	When I call API to search by inputing invalid policy number "<policyNumber>" 
	Then system response no content with status code "<statusCode>" 
	
	Examples: 
		| policyNumber | statusCode |
		| 2816548240%  |        204 |
		| %2816548240% |        204 |
		|              |        204 |
		
Scenario Outline: Search policy infomation by valid policy number 
	Given I already get authorization 
	When I call API to search by inputing valid policy number "<policyNumber>" 
	Then system response with status code "<statusCode>" 
	
	Examples: 
		| policyNumber | statusCode |
		|   2816548240 |        200 |
		|   2871284582 |        200 |
		
Scenario Outline: Verify field name in response body 
	Given I search policy successfully "<policyNumber>" 
	Then I can get correct response field name 
	
	Examples: 
		| policyNumber | 
		|   2816548240 |
Scenario Outline: Verify POLICY items from response body 
	Given I can search a policy "<policyNumber>" 
	Then I get correct policyNumber "<policyNumber>" 
	And I get correct excludeInfo 
	And I get correct bancaInd 
	And I get correct agentCode "<agentCode>"
	And I get correct agentMobile 
	And I get correct agentName 
	And I get correct locationCode 
	And I get correct gracePeriod 
	And I get correct ostPrem
	
	Examples: 
		| policyNumber | agentCode	|
		| 2816548240   |SS029		|
		| 2871284582   |FT487		|
		
Scenario Outline: Verify POLICY_OWNER items from response body 
	Given I search a policy "<policyNumber>" 
	And I get correct clientNumber "<clientNumber>"
	And I get correct clientName
	And I get correct idNumber
	And I get correct idIssueDate
	And I get correct idIssuePlace
	And I get correct sexCode
	And I get correct birthdate
	And I get correct vipInd
	
	Examples: 
		| policyNumber | clientNumber	|
		| 2816548240   |2802978231		|
		| 2871284582   |2805363580		|

Scenario Outline: Verify response time
	 Given I call the API "<policyNumber>" 
	 Then response time should not exceed "<responseTime>" miliseconds
	Examples: 
		| policyNumber | responseTime	|
		| 2816548240   |9000		|
		| 2871284582   |9000		|	 
	 
	 
	 
	 
	 
