package apiEngine;

import java.util.concurrent.TimeUnit;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import managers.configFileReader;

public class EndPoints {

	private configFileReader config = new configFileReader();
	private final RequestSpecification request;

	public EndPoints(String baseUrl) {
		RestAssured.baseURI = config.getBaseUrl();
		request = RestAssured.given();
		request.header("Content-Type", "application/json");
	}

	public Response searchByGETMethod(String cityName, String stateCode, String apiKey) {
		Response response = request.get(config.searchPath() + cityName + "," + stateCode + "&appid=" + apiKey);
		return response;
	}


	public Response searchByPOSTMethod(String cityName, String stateCode, String apiKey) {
		Response response = request.post(config.searchPath() + cityName + "," + stateCode + "&appid=" + apiKey);
		return response;
	}	
	
	public  long getResponseTime(String cityName, String stateCode, String apiKey){
		long responseTime= request.get(config.searchPath() + cityName + "," + stateCode + "&appid=" + apiKey).timeIn(TimeUnit.MILLISECONDS);
		return responseTime;
		}
}
