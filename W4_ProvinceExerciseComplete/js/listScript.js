// Province List

var countryName;
var countryFile;
var background;
var pList = new Array();
var rowID;

// REST parameter used for cities since the list can vary depending on provice
class Prov {
	constructor (name, type, capital, flag, ...cities) {
		this.name = name; this.type = type;
		this.capital = capital; this.flag = flag;
		this.cities = cities;
	}
}

function getData() {
	countryName = localStorage.getItem("cname");
	countryFile = localStorage.getItem("fname");

	fetch(`../dataFiles/${countryFile}`)
	.then(res => res.json())
	.then((data) => {
		console.log(data);
    loadPage(data);
	});
}

function loadPage(data) {
	background = data.country.background;
	for (let prov of data.country.division) {
		// prov = data.country.division[index]
		
		if (prov.type == "province") {
			var cities = new Array();

			for (let city of prov.city) {
				cities.push(city);
			}

			pList.push(new Prov(prov.name, prov.type, prov.capital, prov.pic, cities));
		}
	}	
	mainScreen(data); 
}

function mainScreen(data) {
	document.getElementById("country").innerHTML = `${countryName} / Provinces Only`;
	document.getElementById("background").innerHTML = `${background}`;	
	document.getElementById("background").style.display = 'none';

	document.getElementById("provList").innerHTML = "";	
for (let [index, value] of pList.entries()) {
	document.getElementById("provList").innerHTML +=
	`
		<li onclick="saveToLS(${index})">
			<a href="./provPage.html">${value.name}</a>
		</li>
	`;
	}
}

function saveToLS(index) {
	localStorage.setItem("rowID", index);
	localStorage.setItem("countryName", countryName);
	localStorage.setItem("pList", JSON.stringify(pList));
 
}

function backHead() {
	let x = document.getElementById("background");
		if (x.style.display === 'none') { x.style.display = 'block'; } 
		else { x.style.display = 'none'; }
}
