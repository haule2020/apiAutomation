package stepDefinitions;

import org.junit.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import shareContext.TestContext;
public class CheckResponseTime extends BaseSteps {
		
	public CheckResponseTime(TestContext testContext) {
		super(testContext);
	}
	long time; 
	public String cityName = getExcelReader().getCellData("searchCity", "cityName", 2);	
	public String stateCode = getExcelReader().getCellData("searchCity", "stateCode", 2);
	public String apiKey = getExcelReader().getCellData("searchCity", "apiKey", 2);
	
	@Given("^I call the API$")
	public void i_call_the_API() throws Throwable {
		 time =  getEndPoints().getResponseTime(cityName, stateCode, apiKey);   
	   
	}

	@Then("^response time should not exceed \"([^\"]*)\" miliseconds$")
	public void response_time_should_not_exceed_seconds(String arg1) {	 
		System.out.println("responseTime : " + time);
		long time1=  new Long(Long.parseLong(arg1));			
		Assert.assertFalse(time>time1);
		 
	}
}
