package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import shareContext.TestContext;

public class CheckHeaders extends BaseSteps {
	
	public CheckHeaders(TestContext testContext) {
		super(testContext);
	}

	private Response response;


}
