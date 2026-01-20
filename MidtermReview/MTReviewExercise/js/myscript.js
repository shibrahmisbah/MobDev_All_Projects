// SYST24444 Mid-Term Review

// Change variable below to your campus if not default value
var campus = "Davis";

function startup() {

/* Question 01:
  Include “Sheridan” in <body> section where indicated and 
  change formatting to the "college" class */  

  document.getElementById("schoolName").innerHTML += "Sheridan";
  document.getElementById("schoolName").classList.add("college");

/* Question 02:
  Include your main campus in <body> section where indicated preceded by 'Campus' and 
  change text color to blue using Template Literals */

  document.getElementById("myCampus").innerHTML = `Campus: ${campus}`;
  document.getElementById("myCampus").style.color  = "blue";

/* Question 03: 
  Change all sections that use the "rhyme" class to italic when DOM loads */

  document.querySelectorAll("section[class='rhyme']").forEach(x => {
    x.style.fontStyle = "italic";
  });

/* Question 04:
  Change the text color to darkgreen and bold for any section that includes an image tag */

  document.querySelectorAll("section").forEach(x => {
    if (x.querySelector("img")) {
      x.style.color = "darkgreen";
      x.style.fontWeight = "bold";
      x.style.fontSize = "5em";

    }
  });  

/* Question 05:
  Add code that displays an alert box that includes "Accessible" when an img with an alt attribute is clicked */

  document.querySelectorAll("img[alt]").forEach(x => {
   x.addEventListener("click", function() {alert('Accessible');})
  });

} // end of startup

/* Question 06:
  Code the hide button that will toggle (hide/show) any section that contains “ow” */
	function hideCmd() {
    document.querySelectorAll("section").forEach(x => {
      if (x.textContent.includes('ow')) {
        if (x.style.display === 'none') {
          x.style.display = 'block';
        }
        else {
          x.style.display = 'none';
        }
      }
    });
    // if visibility is asked for, the check and the values would be different (look in Selectors exercise)
	} // end of hideCmd

/* Question 07:
	Code the audio button to toggle a border around any audio whose source is a .wav file using the .audioBorder CSS class */
	function audioCmd() {
    document.querySelectorAll("audio[src $= 'wav']").forEach(x => {
      x.classList.toggle('audioBorder');
    });
    // $= ends with;  ^= starts with
	}  // end of videoCmd
	

	/* Question 08:
  Code the letEx button to pull school name contents and display each letter in the console one at a time */	
	function letEx() {
    for (let x of document.getElementById("schoolName").innerHTML) {
      console.log(x);
    }

var lname = "Misbah";


for (let x of lname) {
  document.getElementById("examOut").innerHTML += 
  `
     <li> ${x}</li>
`;
}


	}  // end of letEx


/* Local Storage */
/* Question 09:
  Code the button that will submit the Computer Name and 
  Computer cost to local storage using the keys:
  - review_ComputerName
  - review_ComputerCost */

	function submitRev() {
    //localStorage.setItem("review_ComputerName", document.getElementById("cname").value);
    //localStorage.setItem("review_ComputerCost", document.getElementById("ccost").value);
    localStorage.setItem("misbah", document.getElementsByTagName("input")[0].value);
    localStorage.setItem("991593708", document.getElementsByTagName("input")[1].value);
    alert("Data Submitted");
	}

/* Question 10:
  Code the button that will retrieve the Computer Name and 
  Computer cost from local storage using the keys and display
  in the corresponding output areas */
	
	function getRev() {
    /* para id of #makeOutput; make variable output bold*/
    document.getElementById("makeOutput").innerHTML =
    `
    The computer make is <strong>${localStorage.getItem("review_ComputerName")}</strong>
    `;

    /* input box id of #cost */
    document.getElementById("cost").value = 
    `The computer cost is ${localStorage.getItem("review_ComputerCost")}`
	}

/* JSON */

/* Question 11:
  Write the fetch call to open the cars.json file and include a 
  console.log statement in the success function that shows the 
  json file data; 
	NOTE: Will also need to know structure of XMLHttpRequest

  Include a call to a jq1 function and pass the json data 
  Include a call to a jq2 function and pass the json data 
  Include a call to a jq3 function and pass the json data */

	function loadJSON() {
    fetch("./data/cars.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      jq1(data);
      jq2(data);
      jq3(data);
    });
	}

/* Question 12: 
  In the jq1 function:
		Update the second <h2> to include the header text from the json file */
	function jq1(data) {
    document.querySelectorAll("h2").forEach((x, index) => {
      if (index === 1) {x.innerHTML = data.information;}
    });

    //document.getElementsByTagName("h2")[1].innerHTML = data.information;
	}

/* Question 13:
  In the jq2 function:
    Output All Used Cars that use Diesel in the output area provided */
	function jq2(data) {
    document.getElementById("carList").innerHTML = "";
    for (let car of data.cars.Used) {
      if (car.engine === 'diesel') {
        document.getElementById("carList").innerHTML +=
        `
        <tr>
          <td>${car.make}</td>
          <td>${car.type}</td>
          <td>${car.cost}</td>
          <td>${car.engine}</td>
        </tr>


        `;
      }
    }
	}


/* Question 14:
  In the jq3 function:
		Output new car details (except colours) 
		MAKE TYPE with ENGINE engine costs COST 
		(Uppercase words come from JSON file) */
	function jq3(data) {
    document.getElementById("details").innerHTML = "";

    for (let car of data.cars.New) {
      document.getElementById("details").innerHTML +=
      `
<li>
  <em>${car.make.toUpperCase()}</em> ${car.type.toUpperCase()} with ${car.engine.toUpperCase()} engine 
          costs <strong>$${car.cost.toFixed(2)} </strong>
</li>
      `;
    }
	}



