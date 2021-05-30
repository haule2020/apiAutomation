package apiEngine;

import java.util.concurrent.TimeUnit;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
public class EndPoints {

	private final RequestSpecification request;

	public EndPoints(String baseUrl) {
		RestAssured.baseURI = baseUrl;
		request = RestAssured.given();
		request.header("Content-Type", "application/json");
	}

	public Response searchByGETMethod(String searchPath, String cityName, String stateCode, String apiKey) {
		Response response = request.get(searchPath + cityName + "," + stateCode + "&appid=" + apiKey);
		return response;
	}

	//
	public Response searchByPOSTMethod(String searchPath, String cityName, String stateCode, String apiKey){
		Response response = request.post(searchPath+ cityName + "," + stateCode + "&appid=" + apiKey);
		return response;
	}	
	
	public  long getResponseTime(String searchPath,String cityName, String stateCode, String apiKey){
		long responseTime= request.get(searchPath+ cityName + "," + stateCode + "&appid=" + apiKey).timeIn(TimeUnit.MILLISECONDS);
		return responseTime;
		}
}
