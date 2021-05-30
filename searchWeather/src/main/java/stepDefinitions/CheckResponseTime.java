package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import shareContext.TestContext;
public class CheckResponseTime extends BaseSteps {
		
	public CheckResponseTime(TestContext testContext) {
		super(testContext);
	}
	long actualResponseTime; 
	public String cityName = getExcelReader().getCellData("searchCity", "cityName", 2);	
	public String stateCode = getExcelReader().getCellData("searchCity", "stateCode", 2);
	public String apiKey = getExcelReader().getCellData("searchCity", "apiKey", 2);
	
	@Given("^I call the API$")
	public void i_call_the_API() throws Throwable {
		//Call server to get response time
		 actualResponseTime =  getEndPoints().getResponseTime(cityName, stateCode, apiKey);   	   
	}
	@Then("^response time should not exceed \"([^\"]*)\" miliseconds$")
	public void response_time_should_not_exceed_seconds(String arg1) {
		//Check that actualResponseTime should < timeExpected
		System.out.println("responseTime : " + actualResponseTime);
		long timeExpected=  new Long(Long.parseLong(arg1));			
		Assert.assertFalse(actualResponseTime>timeExpected);
		 
	}
}
