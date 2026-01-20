// Province List - index script
function buildList() {
  fetch("./dataFiles/countries.json")
	.then(res => res.json())
	.then((dataJSON) => {
		//console.log(dataJSON);

		loadPage(dataJSON);
	});
}

function loadPage(dataJSON) {
  document.getElementById("selection").innerHTML = "";

  for (let value of dataJSON.countryList) {
    console.log(value.name);
    console.log(value.file);
    document.getElementById("selection").innerHTML +=
    `
      <p>
        <a onclick="countryData('${value.name}', '${value.file}')" href="otherPages/provList.html">${value.name}
        <img src='images/${value.pic}' width='100'>
        </a>
      </p>
    `;
  }
}

function countryData(cname, fname) {
  localStorage.setItem("cname", cname);
  localStorage.setItem("fname", fname);
}

