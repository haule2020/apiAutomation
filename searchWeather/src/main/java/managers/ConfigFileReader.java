package managers;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;


//Config File Reader to get based info from Configuration.properties  file
public class ConfigFileReader {
	private Properties properties;
	private final String propertyFilePath = "configs//Configuration.properties";	
	private static ConfigFileReader configReader;
	
	 //Load file config
	private ConfigFileReader() {
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}
	}
	
	//Implement Singleton Pattern
	public static ConfigFileReader getInstance( ) {
	     return (configReader == null) ? configReader = new ConfigFileReader():configReader; 
	}
	
	//Get Base Url from Configuration file
	public String getBaseUrl() {
		String baseurl = properties.getProperty("baseUrl");
		if (baseurl != null)
			return baseurl;
		else
			throw new RuntimeException(
					"Application Url not specified in the Configuration.properties file for the Key:url");
	}

	//Get url path from Configuration file
	public String searchPath() {
		String searchPath = properties.getProperty("searchPath");
		if (searchPath != null)
			return searchPath;
		else
			throw new RuntimeException(
					"searchPath not specified in the Configuration.properties file for the Key:searchPath");
	}
	

}