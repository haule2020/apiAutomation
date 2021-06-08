package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import shareContext.TestContext;

public class SearchByValidParameters extends BaseSteps {

	public SearchByValidParameters(TestContext testContext) {
		super(testContext);
	}

	private Response response;


	@When("^I search with valid parameters \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void iSearchWithValidParameters(String cityName, String stateCode, String apiKey) throws Throwable {
		response = getEndPoints().searchCity(cityName, stateCode, apiKey);
	   
	}

	@Then("^I can search successfully with status code \"([^\"]*)\"$")
	public void iCanSearchSuccessfullyWithStatusCode(String statusCode) throws Throwable {
		int status  = Integer.valueOf(statusCode);
		Assert.assertEquals(status, response.getStatusCode());  
	   
	}


}
