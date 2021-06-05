package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.SnippetType;

//Runner class to execute the test
@RunWith(Cucumber.class)
@CucumberOptions(monochrome = false, snippets = SnippetType.CAMELCASE, features = "src/test/Feature/searchWeatherCity.feature", glue = "stepDefinitions", format = {
		"json:target/cucumber-reports/cucumber.json" }, plugin = { "junit:target/cucumber-reports/Cucumber.xml",
				"html:target/cucumber-reports" })
public class ApiRunner {
}
