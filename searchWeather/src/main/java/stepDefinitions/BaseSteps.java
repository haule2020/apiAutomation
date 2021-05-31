package stepDefinitions;

import apiEngine.EndPoints;
import shareContext.TestContext;

public class BaseSteps {

	private EndPoints endPoints;	
	
	// Base steps to be extended in other test steps
	public BaseSteps(TestContext testContext) {
		endPoints = testContext.getEndPoints();
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}
}
