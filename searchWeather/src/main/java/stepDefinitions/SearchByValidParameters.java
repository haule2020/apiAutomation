package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import managers.ConfigFileReader;
import shareContext.TestContext;

public class SearchByValidParameters extends BaseSteps {

	public SearchByValidParameters(TestContext testContext) {
		super(testContext);
	}

	private Response response;
	private String cityName = getExcelReader().getCellData("searchCity", "cityName", 2);
	private String stateCode = getExcelReader().getCellData("searchCity", "stateCode", 2);
	private String apiKey = getExcelReader().getCellData("searchCity", "apiKey", 2);
	private String searchPath = ConfigFileReader.getInstance().searchPath();

	@When("^I search with valid parameters$")
	public void i_search_with_valid_parameters() {
		// Call searchByGETMethod to send GET request
		response = getEndPoints().searchByGETMethod(searchPath, cityName, stateCode, apiKey);
	}

	@Then("^I can search successfully with status code \"([^\"]*)\"$")
	public void i_can_search_successfully_with_status_code(int arg1) {
		Assert.assertEquals(arg1, response.getStatusCode());
	}

	@When("^I search with with POST method$")
	public void i_search_with_with_POST_method() throws Throwable {
		// Call searchByPOSTMethod to send POST request
		response = getEndPoints().searchByPOSTMethod(searchPath, cityName, stateCode, apiKey);
	}

	@Then("^API called successfully$")
	public void api_called_successfully() throws Throwable {
		// Compare actual status code with expected one
		Assert.assertEquals(200, response.getStatusCode());
	}

}
