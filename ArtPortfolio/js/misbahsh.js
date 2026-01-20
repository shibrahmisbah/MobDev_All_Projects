//create a class called Category and Book
var rowID;

class Category {
    constructor(categoryGroup, logo) {
      this.categoryGroup = categoryGroup; this.logo = logo;
    }
}

class ArtDetails {
    constructor(ID, title, thumbnailUrl, longDescription, materials, category) {
      this.ID = ID; this.title = title;
      this.thumbnailUrl = thumbnailUrl; this.longDescription = longDescription; this.materials = materials;
      this.category = category;
    }
  }

//declare arrays
var catList = new Array();
var artList = new Array();

function createMain() {

	fetch(`./dataFiles/artJSON.json`)
	.then(res => res.json())
	.then((data) => {
		console.log(data);
        LoadCategoryArray(data);
        loadFirstPage(data);
        //loadSecondPage(data);
	});
}

//declare variables to store into local storage
var sName, sID, sLogin, sProgram, sHome, sImg;

  function loadFirstPage(data)
  {

    document.querySelector(".header").innerHTML = 
    `
    <h3>SYST24444 / Assignment #2 / Fall 2022</h3> 
    <br>
    <h3>${data.SheridanData.FullName} / ${data.SheridanData.StudentID}</h3>
    <hr>
    `;


    document.querySelector(".footer").innerHTML = 
    `
    <hr>
    <br>
    <h3> My Sheridan Username: ${data.SheridanData.UserName} </h3>
    <br>
    <h3> My Sheridan Program: ${data.SheridanData.Program} </h3>
    `;

    savePersonalDataToLS(data);
    loadCategories(data);
}


function savePersonalDataToLS(data){

    localStorage.setItem("sName", data.SheridanData.FullName);
    localStorage.setItem("sID", data.SheridanData.StudentID);
    localStorage.setItem("sLogin", data.SheridanData.UserName);
    localStorage.setItem("sProgram", data.SheridanData.Program);
}


function LoadCategoryArray(data){

    for(let cat of data.Category){
        catList.push(new Category(cat.categoryGroup, cat.logo));
    }

    for(let b of data.ArtDetails){
        artList.push(new ArtDetails(b.ID, b.title, b.thumbnailUrl, b.longDescription, b.materials, b.category))
    }

    console.log(catList);
    console.log(artList);

}



function saveToLS(index) {

    localStorage.setItem("rowID", index);
	localStorage.setItem("catList", JSON.stringify(catList));
    localStorage.setItem("artList", JSON.stringify(artList));
 
}


 function loadCategories(data) {

  //temporary var that will be available for every single function
  dataTemp = data;

  document.getElementById("list").innerHTML = "";

    //Can use a traditional for loop so I have index value
    //For/Of loop, I have to include a var for the index and value variables
    //PLUS inclide .entries() at the end of the array specification

    for(let [index, value] of catList.entries()){
        console.log(index + " - " + value);
  
        document.getElementById("list").innerHTML +=
        `
        <p class="category"><a  class="anchor" href='otherPages/secondpage.html' id='${index}' onclick='saveToLS(${index})'>${value.categoryGroup}</a></p>
        <br>
        <p class="category"><img style="border-style: solid;" src="images/${value.logo}" width="50" height="50"></img></p>
    
        <hr>
        `;
      }
  }
 

//---------------------------SECOND PAGE JS----------------------

function createMainSecondPage() {
    // fetch JSON file (sample code below)
    fetch("../dataFiles/artJSON.json")
      .then(res => res.json())
      .then((data) => {
          console.log(data);
  
      // call function(s) to use JSON data
      loadSecondPage(data);

      });
    
  } 

  
function loadSecondPage(data){

    document.querySelector(".header").innerHTML = 
    `
    
    <h3>SYST24444 / Assignment #2 / Fall 2022</h3> 
    <br>
    <h3>${localStorage.getItem("sName")} / ${localStorage.getItem("sID")}</h3>
    <hr>
    `;

    document.querySelector(".footer").innerHTML = 
    `
    <hr>
    <br>
    <h3> My Sheridan Username: ${localStorage.getItem("sLogin")} </h3>
    <br>
    <h3> My Sheridan Program: ${localStorage.getItem("sProgram")} </h3>
    `;

        //animalArray.push(new ZooAnimal(value.aID, value.aName, value.aClass, value.aImg));
        
        document.querySelector(".listHeader").innerHTML = 
        `
        <p style="font-size:1.2rem;">Books from the ${JSON.parse(localStorage.getItem("catList"))[localStorage.getItem("rowID")].categoryGroup} Category </p>
        `;    

        //check if row ID is 0 (Java)
        var ID = JSON.parse(localStorage.getItem("rowID"))
        

         for(let [index, value] of JSON.parse(localStorage.getItem("artList")).entries()){


            if(value.category === JSON.parse(localStorage.getItem("catList"))[ID].categoryGroup){

                document.getElementById("bookProperties").innerHTML +=
                `
                <p> <strong> Title </strong></p>
                <p> ${value.title}</p>
                <br>
                <p> <strong>ID</strong></p>
                <p> ${value.ID}</p>
                <br>
                <p> <strong>Category</strong> </p>
                <p> ${value.category}</p>
                <br>
                <p> <strong>Medium</strong> </p>
                <p> ${value.materials}</p>

                <br>
                <a href="../images/${value.thumbnailUrl}" target="_blank">Click</a>
                <hr>
                
                
               `;

            }
         }
}

function displayDescription(){

    if( document.getElementById("longDesc").style.display === 'none'){
        document.getElementById("longDesc").style.display = 'block';
    }else{

        document.getElementById("longDesc").style.display = 'none';
    }
    

}