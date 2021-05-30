package stepDefinitions;

import apiEngine.EndPoints;
import managers.Xls_Reader;
import shareContext.TestContext;

public class BaseSteps {

	private EndPoints endPoints;
	private Xls_Reader reader;

	// Base steps to be extended in other test steps
	public BaseSteps(TestContext testContext) {
		endPoints = testContext.getEndPoints();
		reader = testContext.getExcelReader();
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}

	public Xls_Reader getExcelReader() {
		return reader;
	}
}
