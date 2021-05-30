package bodyResponseFields;

import java.util.List;

//POJO class to store fields and values converted from  body response JSON file
public class BodyResponse {
	public Coord coord;
	public List<Weather> weather;
	public String base;
	public Main main;
	public Integer visibility;
	public Wind wind;
	public Clouds clouds;
	public Integer dt;
	public Sys sys;
	public Integer timezone;
	public Integer id;
	public String name;
	public Integer cod;
}
