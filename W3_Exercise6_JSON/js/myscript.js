class CityArray {
  constructor(city, lat, lon) {
    this.city = city; this.lat = lat; this.lon = lon;
  }
}
var cityArray = new Array();
var rowID;

// Create main page output using local JSON file
function createMain() {
  // fetch JSON file (sample code below)
  fetch("./dataFiles/cities.json")
	.then(res => res.json())
	.then((dataJSON) => {
		console.log(dataJSON);

    // call function(s) to use JSON data
    loadPage(dataJSON);
	});
  
}


function loadPage(dataJSON){


  document.getElementById("cityList").innerHTML = "";

  //create array based on cityArray 
  //need to know index of the page (1, 2, 3)
  //index needs to be index, value can be replaced
  for(let [index, value] of dataJSON.cities.entries()){

    cityArray.push(new CityArray(value.cityName, value.cityLat, value.cityLon));

    document.getElementById("cityList").innerHTML +=
    `
    <li>
      <a onclick = 'findIndex(${index})' 
      href='otherPages/weather.html'>
      ${value.cityName}
      </a><hr>
    </li>
  
    `;
  }

  console.log(cityArray);
  //will pull info in each page along with the appropriate rowID
  localStorage.setItem("cityArray", JSON.stringify(cityArray));


}

function findIndex(index){

  //rowID is a variable defined already
  localStorage.setItem("rowID", index);
}

/* 
	fetch("URL to JSON file")
	.then(res => res.json())
	.then((variable to hold JSON data) => {
		console.log(JSON variable to check retrieval);

    // call function(s) to use JSON data
	});
*/