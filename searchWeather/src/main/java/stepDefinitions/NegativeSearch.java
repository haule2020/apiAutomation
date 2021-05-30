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
	
	public String cityName = getExcelReader().getCellData("searchCity", "cityName", 2);
	public String invalidCityName = getExcelReader().getCellData("searchCity", "invalidCityName", 2);
	
	public String stateCode = getExcelReader().getCellData("searchCity", "stateCode", 2);
	public String invalidStateCode = getExcelReader().getCellData("searchCity", "invalidStateCode", 2);
	
	public String invalidApiKey = getExcelReader().getCellData("searchCity", "invalidApiKey", 2);
	public String apiKey = getExcelReader().getCellData("searchCity", "apiKey", 2);

	@Given("^I search with invalid City name$")
	public void i_search_with_invalid_City_name()  {
		response= getEndPoints().searchByGETMethod(invalidCityName, stateCode, apiKey);	    
	}

	@Then("^Status code response should be \"([^\"]*)\" not found$")
	public void status_code_response_should_be_not_found(int arg1)  {
		Assert.assertEquals(arg1, response.getStatusCode());	    
	}

	@Given("^I search with valid City name and invalid State code$")
	public void i_search_with_valid_City_name_and_invalid_State_code()  {
		response= getEndPoints().searchByGETMethod(cityName, invalidStateCode, apiKey);	    
	}

	@Then("^Status code response should be \"([^\"]*)\"$")
	public void status_code_response_should_be(int arg1)  {
		Assert.assertEquals(arg1, response.getStatusCode());		
	}

	@When("^I search with valid City name and invalid API key$")
	public void i_search_with_valid_City_name_and_invalid_API_key()  {
		response= getEndPoints().searchByGETMethod(cityName, stateCode, invalidApiKey);	    
	}

	@Then("^I should get respose code \"([^\"]*)\"$")
	public void i_should_get_respose_code(int arg1)  {	    
		Assert.assertEquals(arg1, response.getStatusCode());
	}
	
}
