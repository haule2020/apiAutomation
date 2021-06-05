//package stepDefinitions;
//
//import org.junit.Assert;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import io.restassured.response.Response;
//import shareContext.TestContext;
//
//public class CheckHeaders extends BaseSteps {
//	
//	public CheckHeaders(TestContext testContext) {
//		super(testContext);
//	}
//
//	private Response response;
//
//	@Given("^I call API successfully$")
//	public void i_call_API_successfully() {
//		response = getEndPoints().searchByGETMethod();
//	}
//
//	@Then("^response header with correct content type \"([^\"]*)\"$")
//	public void response_header_with_correct_content_type(String arg1) {
//		String contentType = response.header("Content-Type");
//		Assert.assertEquals(contentType, arg1);
//	}
//
//	@Then("^response header with correct server name \"([^\"]*)\"$")
//	public void response_header_with_correct_server_name(String arg1) {
//		String serverName = response.header("server");
//		Assert.assertEquals(serverName, arg1);
//	}
//
//}
