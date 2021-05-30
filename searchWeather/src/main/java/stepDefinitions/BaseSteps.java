package stepDefinitions;

import apiEngine.EndPoints;
import managers.Xls_Reader;
import managers.configFileReader;
import shareContext.TestContext;

public class BaseSteps {

	private EndPoints endPoints;
	private Xls_Reader reader;
	private configFileReader config;
	
	public BaseSteps(TestContext testContext) {
		endPoints = testContext.getEndPoints();
		reader = testContext.getExcelReader();	
		config=testContext.getConfig();
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}	

	public Xls_Reader getExcelReader() {
		return reader;
	}
	
	public configFileReader getConfig() {
		return config;
	}
    
    
}
