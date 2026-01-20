// M02-MOCK js/mock.js

// functions from index.html
function saveLS() {

    //key;has to be in double quotes; user defined
    //value; pulled out of the box
    localStorage.setItem("sname", document.getElementById("sname").value);
    localStorage.setItem("id", document.getElementById("sid").value);

    //go to next page
    location.assign("./otherPages/page2.html");


}

function h3class() {

    //changes text color when classname is not added already 
    document.querySelector("h3").classList.add("h3head");


}

function h3hide() {

    let h3 = document.querySelector("h3");

    if(h3.style.display === 'none'){
        h3.style.display = 'block';
    }else{
        h3.style.display = 'none';
    }

    //how to prevent changes from rearranging page layout
    //visibility



}

function labelName() {

    //helpful for a ctrl+F function

    //if you want it to be case sensitive, do not use toLowerCase or toUpperCase
    
    //use All when you need to select multiple tags
    document.querySelectorAll("label").forEach(x => {
        if(x.textContent.toLowerCase().includes('name')){
            x.style.color = 'red';
        }
    })

}

//-----------------------------------------------------------

// functions from page2
function loadStudentData() {

    ///#output (section) - using id
    document.getElementById("output").innerHTML =
    `
    <h2>
        Student Name: <em>${localStorage.getItem("sname")}</em>
    </h2>

    <h3>
        Student ID: <em>${localStorage.getItem("id")}</em>
    </h3>

    `;

}