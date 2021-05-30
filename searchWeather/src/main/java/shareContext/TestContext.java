package shareContext;

import apiEngine.EndPoints;
import managers.Xls_Reader;
import managers.ConfigFileReader;

public class TestContext {

	 private EndPoints endPoints = new EndPoints(ConfigFileReader.getInstance().getBaseUrl());
	private final String testDataFile = System.getProperty("user.dir") + "\\resources\\testData\\testData.xlsx";
	private Xls_Reader reader;


	public TestContext() {
		reader = new Xls_Reader(testDataFile);
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}

	public Xls_Reader getExcelReader() {
		return reader;
	}

}
