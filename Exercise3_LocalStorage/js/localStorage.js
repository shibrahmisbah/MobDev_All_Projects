// M02-Local Storage: localStorage.js

class StudentData {
	constructor (name, id, tuition, scholarship) {this.name=name; this.id=id; this.tuition=tuition; this.scholarship=scholarship;}
}

var studentData = [];

function buildList() {
	studentData.push(new StudentData("Mick Mouse", "991000111", 2000.00, 500.00));
	studentData.push(new StudentData("Don Duck", "991000222", 2000.00, 1500.00));
	studentData.push(new StudentData("Pluto Dog", "991000333", 2000.00, 150.00));
	studentData.push(new StudentData("Nemo Fish", "991000444", 2000.00, 0.00));
	studentData.push(new StudentData("Simba Lion", "991000555", 2000.00, 750.00));
}


function createList() {
	// Create array of student data based on Class structure
	buildList();
	console.log(studentData);



	// Create a label first option for select box
	document.getElementById("selectBox").innerHTML = 
	`
	<option>
	Select an ID
	</option
	`;

	// Create a header for student data list
    document.getElementById("students").innerHTML =
	`
		<h1>Student Data</h1>
	`;

	// Loop through studentData array and create an <option> in #selectBox element AND
	// Create output of student record in #students section
	for(let student of studentData) {
		document.getElementById("selectBox").innerHTML +=
		`
		<option>
		${student.id}
		</option>
		`;

		document.getElementById("students").innerHTML +=
		`
		<strong>Name: ${student.name}</strong> / ${student.id}
		<br>

		Tuition: ${student.tuition} - Scholarship: ${student.scholarship}
		<hr>
		`;
	}





}

/* ------------------------------------------------------------------------- */

function saveDataToLS() {
	// Find index in array to save


	// Since we had first option as a label, must subtract 1 from selected index
	index = document.getElementById("selectBox").selectedIndex - 1;
	console.log(index);

	// Use index to save correct data to local storage
	// Check in Developer Tools to see if correct data is being saved
	//localStorage.setItem("index", index);
    localStorage.setItem("name", studentData[index].name);
	localStorage.setItem("id", studentData[index].id);
	localStorage.setItem("tuition", studentData[index].tuition);
	localStorage.setItem("scholarship", studentData[index].scholarship);
    
    


}

function makeReport() {
	// Call a function to save record chosen to local storage 
    saveDataToLS();


	// Call report page
   location.assign("./pages/report.html");


}

/* ------------------------------------------------------------------------- */

function loadReport() {
	// From report page: Get all data from local storage and populate fields on form
	// NOTE: All data from LS is a string...parseFloat() may be needed for amounts

	document.getElementById("outid").value = localStorage.getItem("id");
	document.getElementById("outname").value = localStorage.getItem("name");
    
	let tuition = parseFloat(localStorage.getItem("tuition"));
	let scholarship = parseFloat(localStorage.getItem("scholarship"));


	// Use values from LS to calculate final amount
	//NEED TO KNOW OUTPUT TYPE AS WELL

	document.getElementById("outamount").value = ((tuition - scholarship) * 1.13).toFixed(2);



}

function goToIndex() {
	// Go back to previous page
	location.assign("../index.html");
	
}

function printData() {
	// Use windows print function to print report page
	window.print();

}

