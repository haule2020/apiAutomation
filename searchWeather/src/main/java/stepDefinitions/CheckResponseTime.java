package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import shareContext.TestContext;

public class CheckResponseTime extends BaseSteps {
	
	private long actualResponseTime;

	
	public CheckResponseTime(TestContext testContext) {
		super(testContext);
	}	
	
	@Given("^I call the API with parameters \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void iCallTheAPIWithParameters(String cityName, String stateCode, String apiKey) throws Throwable {
		actualResponseTime = getEndPoints().getResponseTime(cityName, stateCode, apiKey);	    
	}

	@Then("^response time should not exceed \"([^\"]*)\" miliseconds$")
	public void responseTimeShouldNotExceedMiliseconds(String responseTime) throws Throwable {	   
	    Assert.assertTrue(actualResponseTime< Long.valueOf(responseTime));
	}


}
