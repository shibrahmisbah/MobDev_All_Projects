/* JSON External File - myscript2.js */
var cityArray;
var rowID;
var cdate = new Date();

function weatherOutput() {
	// output date in header
	document.getElementById("cdate").innerHTML = cdate.toDateString();


	// Get rowID and cityArray from local storage
    rowID = localStorage.getItem("rowID");
	cityArray = JSON.parse(localStorage.getItem("cityArray"));


	// Set lat and lon variables from cityArray
	var lat = cityArray[rowID].lat;
	var lon = cityArray[rowID].lon;


	// Get API key from https://home.openweathermap.org/

	// UNCOMMENT apiURI below (from openweathermap for use in class)
  var apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=484e47e5a69dfcd6d1d089e84051d0d5`;

	//JSONP is NOT supported in standard Fetch API so must use XMLHttpRequest call (sample code below)
	//For this exercise, call the loadPage function from the XMLHttpRequest call
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", apiURI, true);

	xhttp.send();

	xhttp.onload = function() {
		data = this.responseText;
		weather = JSON.parse(data);
		console.log(weather);

		loadPage(weather);
	}

}

function loadPage(weather) {
	// City name
	document.querySelector(".dataCity").innerHTML = weather.name;

	// Temp is in Kelvin. To get Celsius, subtract 273.15 from Kelvin temp
	/*  The Kelvin scale is an absolute, thermodynamic temperature scale 
      using as its null point absolute zero, the temperature at which 
 			all thermal motion ceases in the classical description of thermodynamics. */

	document.querySelector(".dataTemp").innerHTML =`${(weather.main.temp - 273.15).toFixed()} C`;

	// Wind Speed is measured in meters per second (m/s)
	document.querySelector(".dataWind").innerHTML =`${weather.wind.speed} m/s`;

	// Humidity measured in percentage
	document.querySelector(".dataHum").innerHTML = `${weather.main.humidity} %`;


	// Pressure is measured hectopascals (hPa)
	document.querySelector(".dataPress").innerHTML = `${weather.main.pressure} hPa`;

	//JSONIntro02 - 


}

/*
const xhttp = new XMLHttpRequest();
xhttp.open("GET", INCLUDE URL HERE, true);
xhttp.send();

xhttp.onload = function() {
	data = this.responseText;
	variable to hold JSON data = JSON.parse(data);
	console.log(JSON variable);

	// call function(s) to use JSON data
}
*/




