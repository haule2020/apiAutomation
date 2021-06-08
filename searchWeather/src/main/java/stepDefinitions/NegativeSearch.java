package stepDefinitions;

import org.junit.Assert;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import shareContext.TestContext;

public class NegativeSearch extends BaseSteps {

	public NegativeSearch(TestContext testContext) {
		super(testContext);
	}

	Response response;

	@Given("^I search with invalid \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void iSearchWithInvalidAndAnd(String cityName, String stateCode, String apiKey) throws Throwable {
	  response = getEndPoints().searchCity(cityName, stateCode, apiKey);
	}

	@Then("^Status code response \"([^\"]*)\" should be not found$")
	public void statusCodeResponseShouldBeNotFound(String statusCode) throws Throwable {
		int status  = Integer.valueOf(statusCode);
		Assert.assertEquals(status, response.getStatusCode());    
	}

	@Given("^I search with \"([^\"]*)\" and \"([^\"]*)\" and invalid State code \"([^\"]*)\"$")
	public void iSearchWithAndAndInvalidStateCode(String cityName, String stateCode, String apiKey) throws Throwable {
		 response = getEndPoints().searchCity(cityName, stateCode, apiKey);	 
	}

	@Then("^Status code response should be \"([^\"]*)\"$")
	public void statusCodeResponseShouldBe(String statusCode) throws Throwable {
		int status  = Integer.valueOf(statusCode);
		Assert.assertEquals(status, response.getStatusCode());     
	}


	@Given("^I search with \"([^\"]*)\" and State code \"([^\"]*)\" and invalid \"([^\"]*)\"$")
	public void iSearchWithAndStateCodeAndInvalid(String cityName, String stateCode, String apiKey) throws Throwable {
		 response = getEndPoints().searchCity(cityName, stateCode, apiKey);	 	    
	}

	@Then("^Status code response should be \"([^\"]*)\" authentication failed$")
	public void statusCodeResponseShouldBeAuthenticationFailed(String statusCode) throws Throwable {
		int status  = Integer.valueOf(statusCode);
		Assert.assertEquals(status, response.getStatusCode()); 
	    
	}

	

}
