// M04 MOCK-myscript2

function loadPage() {

    let data = JSON.parse(localStorage.getItem("data"));
    let index = localStorage.getItem("index");

    //retrieving JSON file in console
    console.log(data);
    console.log(index);

    //building entire page except for GO BACK button
    document.getElementById("output").innerHTML =
    `
    <h1>${data.college.collegeName}</h1>
    <h2>${data.college.Campuses[index].campusName}</h2>


    <h3>${data.college.Campuses[index].campusCity}</h3>

    <img src='../images/${data.college.Campuses[index].campusPic}' width='100'>
    
    `;

}; 	

