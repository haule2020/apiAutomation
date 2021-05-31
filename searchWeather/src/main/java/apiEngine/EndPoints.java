//API engine pachge
package apiEngine;

import java.util.concurrent.TimeUnit;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import managers.ConfigFileReader;
import shareContext.TestData;

//API request methods used in the test
public class EndPoints {

	private final RequestSpecification request;
	public  Response response;
	private final String cityName= TestData.getInstance().cityName();
	private final String stateCode= TestData.getInstance().cityName();
	private final String apiKey= TestData.getInstance().apiKey();
	private final String invalidCityName= TestData.getInstance().invalidCityName();
	private final String invalidStateCode= TestData.getInstance().invalidStateCode();
	private final String invalidApiKey= TestData.getInstance().invalidApiKey();
	private final String searchPath= ConfigFileReader.getInstance().searchPath(); 
	
	public EndPoints(final String baseUrl) {
		RestAssured.baseURI = baseUrl;
		request = RestAssured.given();
		request.header("Content-Type", "application/json");
	}
	
	// Function call api search with InvalidCity
	public Response searchInvalidCity() {	
		return response = request.post(searchPath + invalidCityName + "," + stateCode + "&appid=" + apiKey);		
	}
	
	// Function call api search with Empty City
	public Response searchEmtyCity() {	
		return response = request.post(searchPath + "" + "," + stateCode + "&appid=" + apiKey);		
	}
	
	// Function call api search with invalid StateCode
	public Response searchInvalidStatecode() {	
		return response = request.post(searchPath + cityName + "," + invalidStateCode + "&appid=" + apiKey);		
	}	
	
	// Function call api search with invalid invalid ApiKey
	public Response searchInvalidApiKey() {	
		return response = request.post(searchPath + cityName + "," + stateCode + "&appid=" + invalidApiKey);		
	}
	
	// Function call api GET request with valid parameters
	public Response searchByGETMethod() {
		return response = request.post(searchPath + cityName + "," + stateCode + "&appid=" + apiKey);		
	}

	// Function call api POST request with valid parameters
	public Response searchByPOSTMethod() {
		return response = request.post(searchPath + cityName + "," + stateCode + "&appid=" + apiKey);		
	}

	// Function call api request to get ResponseTime
	public long getResponseTime() {
		long responseTime = request.get(searchPath + cityName + "," + stateCode + "&appid=" + apiKey)
				.timeIn(TimeUnit.MILLISECONDS);
		return responseTime;
	}	
}
