//package stepDefinitions;
//
//import org.junit.Assert;
//
//import bodyResponseFields.BodyResponse;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.restassured.response.Response;
//import shareContext.TestContext;
//import shareContext.TestData;
//
//public class VerifyResonseData extends BaseSteps {
//
//	public VerifyResonseData(TestContext testContext) {
//		super(testContext);
//	}
//
//	private Response response;
//	private BodyResponse body;
//	private String cityNameResponse;
//
//	@Given("^I performed search city successfully with status code \"([^\"]*)\"$")
//	public void i_performed_search_city_successfully_with_status_code(int arg1) {
//		// Call searchCity method
//		response = getEndPoints().searchByGETMethod();
//		Assert.assertEquals(arg1, response.getStatusCode());
//	}
//
//	@Then("^I can get correct response fields$")
//	public void i_can_get_correct_response_fields() {
//		// Convert Json response to POJO BodyResponse class to check Json
//		// response includes all required fields
//		try {
//			body = new BodyResponse();
//
//			body = response.getBody().as(BodyResponse.class);
//		} catch (Exception e) {
//			// Fail if any required field missing or not correct name
//			e.printStackTrace();
//			Assert.fail();
//		}
//	}
//	@Then("^get the data in COORD field$")
//	public void get_the_data_in_COORD_field() {
//		// Check data response, fail if value is null
//		Assert.assertFalse(body.coord.lon == null);
//		Assert.assertFalse(body.coord.lat == null);
//	}
//
//	@Then("^get the data in WEATHER field$")
//	public void get_the_data_in_WEATHER_field() {
//		// Check Weather.Id response, fail if ID is null
//		Assert.assertFalse(body.weather.get(0).id == null);
//		Assert.assertFalse(body.weather.get(0).description == null);
//	}
//
//	@Then("^get the data in BASE field$")
//	public void get_the_data_in_BASE_field() {
//		Assert.assertFalse(body.base == null);
//	}
//
//	@Then("^get the data in MAIN field$")
//	public void get_the_data_in_MAIN_field() {
//		// Check temp, temp_min, temp_max response, fail if null		
//		Assert.assertFalse(body.main.temp == null);
//		Assert.assertFalse(body.main.temp_min == null);
//		Assert.assertFalse(body.main.temp_max == null);
//	}
//
//	@Then("^get the data in VISIBILITY field$")
//	public void get_the_data_in_VISIBILITY_field() throws Exception {
//		// Check visibility data response, fail if null
//		Assert.assertFalse(body.visibility == null);
//	}
//
//	@Then("^get the data in CLOUDS field$")
//	public void get_the_data_in_CLOUDS_field() {
//		Assert.assertFalse(body.clouds.all == null);
//	}
//
//	// Verify that country value should be semilar to stateCode input
//	@Then("^get the valid country code in SYS field$")
//	public void get_the_valid_country_code_in_SYS_field() {
//		String country = body.sys.country;
//		boolean checkCountry = country.equalsIgnoreCase(TestData.getInstance().stateCode());
//		Assert.assertTrue(checkCountry);
//	}
//
//	@When("^I check data in NAME field$")
//	public void i_check_data_in_NAME_field() {
//		cityNameResponse = body.name;
//	}
//
//	@Then("^NAME value should be semilar to the CityName parameter$")
//	public void name_value_should_be_semilar_to_the_CityName_parameter() {
//		// Test case Fails if cityNameResponse not matched with cityName input
//		boolean checkCityName = cityNameResponse.equalsIgnoreCase(TestData.getInstance().cityName());
//		Assert.assertTrue(checkCityName);
//	}
//}
