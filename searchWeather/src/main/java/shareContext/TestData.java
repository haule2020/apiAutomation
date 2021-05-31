package shareContext;
import managers.Xls_Reader;

//Get test data from testData excel file
public class TestData {
	
	private final String testDataFile = System.getProperty("user.dir") + "\\resources\\testData\\testData.xlsx";
	private Xls_Reader reader;
	
	
	private static TestData data;
	
	 //Load  config file
	private TestData() {
		 reader  =new Xls_Reader(testDataFile);
	}

	//Implement Singleton Pattern
	public static TestData getInstance( ) {
	     return (data == null) ? data = new TestData():data; 
	}
	//Get city name
	public String cityName() {
		 String cityName =  reader.getCellData("searchCity", "cityName", 2);		 
		 return cityName;
	}
	//Get invalid city name
	public String invalidCityName() {
		return reader.getCellData("searchCity", "invalidCityName", 2);	
	}

	//Get state code
	public String stateCode() {
		return reader.getCellData("searchCity", "stateCode", 2);	
	}
	//Get invalid state code
	public String invalidStateCode() {
		return reader.getCellData("searchCity", "invalidStateCode", 2);	
	}
	//Get API key
	public String apiKey() {
		return reader.getCellData("searchCity", "apiKey", 2);	
	}
	//Get invalid API key
	public String invalidApiKey() {
		return reader.getCellData("searchCity", "invalidApiKey", 2);	
	}


}
