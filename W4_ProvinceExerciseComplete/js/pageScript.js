// Province List - Individual Province Details
var pList = new Array();
var rowID;

function loadPage() {
	rowID = localStorage.getItem("rowID");
	pList = JSON.parse(localStorage.getItem("pList"));

	document.getElementById("country").innerHTML = localStorage.getItem("countryName");
	document.getElementById("pname").innerHTML = pList[rowID].name;
	document.getElementById("capital").innerHTML = pList[rowID].capital;
	document.getElementById("flag").innerHTML = `<img src="../images/${pList[rowID].flag}" width="100">`;
	document.getElementById("cities").innerHTML = "Major Cities: <br>";
	document.getElementById("cities").style.textAlign = "left";

	console.log(pList[rowID].cities);
	// Look how cities is included up in local storage because it is the REST parameter
	// cities[0] is saved be for the REST parameter
	// cities[0][0], cities[0][1], cities[0][2], etc.

	for (let x=0; x < pList[rowID].cities[0].length; x++) {
		document.getElementById("cities").innerHTML += `- ${pList[rowID].cities[0][x]}<br>`;
	}
}
