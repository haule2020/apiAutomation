package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import shareContext.TestContext;

public class NegativeSearch extends BaseSteps {

	public NegativeSearch(TestContext testContext) {
		super(testContext);
	}

	private Response response;

	@Given("^I search with invalid City name$")
	public void i_search_with_invalid_City_name() {
		// Call searchByGETMethod to send api request
		response = getEndPoints().searchInvalidCity();
	}

	@Then("^Status code response should be \"([^\"]*)\" not found$")
	public void status_code_response_should_be_not_found(int arg1) {
		// Compare response status code with expected one
		Assert.assertEquals(arg1, response.getStatusCode());
	}

	@Given("^I search with state code , APi key but City name is blank$")
	public void i_search_with_state_code_APi_key_but_City_name_is_blank() throws Throwable {
		response = getEndPoints().searchEmtyCity();	   
	}

	@Then("^Status code response should not be \"([^\"]*)\"$")
	public void status_code_response_should_not_be(String arg1) {
		// Compare response status, fail if status code = 200
		Assert.assertEquals(arg1, response.getStatusCode());   
	}

	
	@Given("^I search with valid City name and invalid State code$")
	public void i_search_with_valid_City_name_and_invalid_State_code() {
		// Call searchByGETMethod to send api request
		response = getEndPoints().searchInvalidStatecode();
	}

	@Then("^Status code response should be \"([^\"]*)\"$")
	public void status_code_response_should_be(int arg1) {
		// Compare response status code with expected one
		Assert.assertEquals(arg1, response.getStatusCode());
	}

	@When("^I search with valid City name and invalid API key$")
	public void i_search_with_valid_City_name_and_invalid_API_key() {
		// Call searchByGETMethod to send api request
		response = getEndPoints().searchInvalidApiKey();
	}

	@Then("^I should get respose code \"([^\"]*)\"$")
	public void i_should_get_respose_code(int arg1) {
		// Compare response status code with expected one
		Assert.assertEquals(arg1, response.getStatusCode());
	}

}
