//API engine pachge
package apiEngine;

import java.util.concurrent.TimeUnit;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import managers.ConfigFileReader;

//API request methods used in the test
public class EndPoints {

	private final RequestSpecification request;
	public  Response response;
	private final String searchPath= ConfigFileReader.getInstance().searchPath(); 
	
	public EndPoints(final String baseUrl) {
		RestAssured.baseURI = baseUrl;
		request = RestAssured.given();
		request.header("Content-Type", "application/json");
	}
	
	// Function call api search with InvalidCity
	public Response searchCity(String	cityName, String stateCode, String apiKey) {
		return response = request.post(searchPath + cityName + "," + stateCode + "&appid=" + apiKey);		
	}
	
	// Function call api request to get ResponseTime
	public long getResponseTime(String	cityName, String stateCode, String apiKey) {
		long responseTime = request.get(searchPath + cityName + "," + stateCode + "&appid=" + apiKey)
				.timeIn(TimeUnit.MILLISECONDS);
		return responseTime;
	}	
}
