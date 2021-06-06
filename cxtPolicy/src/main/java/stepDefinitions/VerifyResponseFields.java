package stepDefinitions;

import java.lang.reflect.Field;

import org.junit.Assert;

import bodyRequests.TokenRequests;
import bodyResponseFields.BodyResponse;
import bodyResponseFields.Policy;
import bodyResponseFields.Token;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import managers.ConfigFileReader;
import shareContext.TestContext;

public class VerifyResponseFields extends BaseSteps {

	public VerifyResponseFields(TestContext testContext) {
		super(testContext);
	}

	private Response response;
	private String token;

	
	@Given("^I search policy successfully \"([^\"]*)\"$")
	public void iSearchPolicySuccessfully(String policyNumber) throws Throwable {
		TokenRequests tokenRequest = new TokenRequests(ConfigFileReader.getInstance().client_id(), ConfigFileReader.getInstance().client_secret(), ConfigFileReader.getInstance().grant_type());
		token=  getTokens().genToken(tokenRequest); 
		response = getEndPoints().searchPolicy(policyNumber, token);
		Assert.assertEquals(200, response.statusCode());
	}

	@Then("^I can get correct response field name$")
	public void iCanGetCorrectResponseFieldName() throws Throwable {
	  try {
		  @SuppressWarnings("unused")
		BodyResponse body = response.body().as(BodyResponse.class);
	} catch (Exception e) {
		e.printStackTrace();
		Assert.fail();
	} 
	

	}

}
