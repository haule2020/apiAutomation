package shareContext;

import apiEngine.EndPoints;
import managers.ConfigFileReader;

public class TestContext {

	private EndPoints endPoints = new EndPoints(ConfigFileReader.getInstance().getBaseUrl());
	
	public TestContext() {
	}

	public EndPoints getEndPoints() {
		return endPoints;
	}

}
