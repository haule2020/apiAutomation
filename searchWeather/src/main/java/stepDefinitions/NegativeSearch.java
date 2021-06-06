package stepDefinitions;

import java.util.Iterator;
import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dataModel.RequestParamenters;
import io.restassured.response.Response;
import shareContext.TestContext;

public class NegativeSearch extends BaseSteps {

	public NegativeSearch(TestContext testContext) {
		super(testContext);
	}

	Response response;

	@Given("^I search with invalid \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void iSearchWithInvalidAndAnd(String cityName, String stateCode, String apiKey) throws Throwable {
	  response = getEndPoints().searchInvalidCity(cityName, stateCode, apiKey);
	    System.out.println(response.asString());
	}

	@Then("^Status code response \"([^\"]*)\" should be not found$")
	public void statusCodeResponseShouldBeNotFound(String arg1) throws Throwable {
		System.out.println(response.getStatusCode());
		int status  = Integer.valueOf(arg1);
		Assert.assertEquals(status, response.getStatusCode());
	    
	}


	// for(List<String> list :data)
	// {

	// Response response =
	// getEndPoints().searchInvalidCity("London","GB","b0a9c8b82f8361b93ce4290a8068f35b");
	// System.out.println(response.asString());

	// }

	// while(it.hasNext())
	// {
	//
	// for(List<String> list :data)
	//
	//
	//
	// //response =
	// getEndPoints().searchInvalidCity(data.get(0).get(0),data.get(0).get(1),data.get(0).get(2));
	// //System.out.println(response.asString());
	// }
	//

	// {
	//
	// response =
	// getEndPoints().searchInvalidCity(columns.get(0),columns.get(1),columns.get(2));
	// System.out.println(response.asString());
	// Assert.assertEquals(200, response.getStatusCode());
	//
	// }
	//

	// System.out.println(data.get(2));

	// response =
	// getEndPoints().searchInvalidCity(data.get(0).get(0),data.get(0).get(1),data.get(0).get(2));

	// Write code here that turns the phrase above into concrete actions
	// For automatic transformation, change DataTable to one of
	// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	// E,K,V must be a scalar (String, Integer, Date, enum etc)

	//
	// @Given("^I search with invalid City name$")
	// public void i_search_with_invalid_City_name() {
	// // Call searchByGETMethod to send api request
	// response = getEndPoints().searchInvalidCity();
	// }
	//
	// @Then("^Status code response should be \"([^\"]*)\" not found$")
	// public void status_code_response_should_be_not_found(int arg1) {
	// // Compare response status code with expected one
	// Assert.assertEquals(arg1, response.getStatusCode());
	// }
	//
	// @Given("^I search with state code , APi key but City name is blank$")
	// public void i_search_with_state_code_APi_key_but_City_name_is_blank()
	// throws Throwable {
	// response = getEndPoints().searchEmtyCity();
	// }
	//
	// @Then("^Status code response should not be \"([^\"]*)\"$")
	// public void status_code_response_should_not_be(int arg1) {
	// // Compare response status, fail if status code = 200
	// Assert.assertNotEquals(arg1, response.getStatusCode());
	// }
	//
	//
	// @Given("^I search with valid City name and invalid State code$")
	// public void i_search_with_valid_City_name_and_invalid_State_code() {
	// // Call searchByGETMethod to send api request
	// response = getEndPoints().searchInvalidStatecode();
	// }
	//
	// @Then("^Status code response should be \"([^\"]*)\"$")
	// public void status_code_response_should_be(int arg1) {
	// // Compare response status code with expected one
	// Assert.assertEquals(arg1, response.getStatusCode());
	// }
	//
	// @When("^I search with valid City name and invalid API key$")
	// public void i_search_with_valid_City_name_and_invalid_API_key() {
	// // Call searchByGETMethod to send api request
	// response = getEndPoints().searchInvalidApiKey();
	// }
	//
	// @Then("^I should get respose code \"([^\"]*)\"$")
	// public void i_should_get_respose_code(int arg1) {
	// // Compare response status code with expected one
	// Assert.assertEquals(arg1, response.getStatusCode());
	// }

}
