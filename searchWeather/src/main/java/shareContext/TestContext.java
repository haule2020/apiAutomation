package shareContext;

import apiEngine.EndPoints;
import managers.Xls_Reader;
import managers.configFileReader;

public class TestContext {

	private configFileReader config;
	private final String testDataFile = System.getProperty("user.dir") + "\\resources\\testData\\testData.xlsx";
	private Xls_Reader reader;
	private EndPoints endPoints;

	public TestContext() {
		endPoints = new EndPoints("");
		config = new configFileReader();
		reader = new Xls_Reader(testDataFile);
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}

	public configFileReader getConfig() {
		return config;
	}

	public Xls_Reader getExcelReader() {
		return reader;
	}

}
