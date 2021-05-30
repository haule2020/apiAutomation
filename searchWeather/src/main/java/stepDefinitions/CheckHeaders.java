package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import managers.ConfigFileReader;
import shareContext.TestContext;

public class CheckHeaders extends BaseSteps {

	public CheckHeaders(TestContext testContext) {
		super(testContext);
	}

	private Response response;
	private String cityName = getExcelReader().getCellData("searchCity", "cityName", 2);
	private String stateCode = getExcelReader().getCellData("searchCity", "stateCode", 2);
	private String apiKey = getExcelReader().getCellData("searchCity", "apiKey", 2);

	@Given("^I call API successfully$")
	public void i_call_API_successfully() {
		String searchPath = ConfigFileReader.getInstance().searchPath();
		response = getEndPoints().searchByGETMethod(searchPath, cityName, stateCode, apiKey);
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^response header with correct content type \"([^\"]*)\"$")
	public void response_header_with_correct_content_type(String arg1) {
		String contentType = response.header("Content-Type");
		Assert.assertEquals(contentType, arg1);
	}

	@Then("^response header with correct server name \"([^\"]*)\"$")
	public void response_header_with_correct_server_name(String arg1) {
		String serverName = response.header("server");
		Assert.assertEquals(serverName, arg1);
	}

}
