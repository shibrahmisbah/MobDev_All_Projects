// M04 MOCK
/* This simple exercise takes data directly to local storage from JSON file
    and includes the id directly in the main page output.
*/

var dataTemp;

function startup() {

  fetch("./dataFiles/sheridan.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    loadCampus(data);
  });
}


function loadCampus(data) {

  //temporary var that will be available for every single function
  dataTemp = data;

  
  document.getElementById("list").innerHTML = "";

  /**
   
    Can use a traditional for loop so I have index value
    For/Of loop, I have to include a var for the index and value variables
    PLUS inclide .entries() at the end of the array specification

  */

    for(let [index, value] of data.college.Campuses.entries()){
      console.log(index + " - " + value);

      document.getElementById("list").innerHTML +=
      `
      <button id='${index}' onclick='saveToLS(${index})'>
        <a href='other/campus.html'>${value.campusName}</a>
      </button>
      <hr>
      `;
    

    }

}

function saveToLS(index){

  //you can also simply pass data in the parameter of this function
  localStorage.setItem("index", index);
  localStorage.setItem("data", JSON.stringify(dataTemp));



}

