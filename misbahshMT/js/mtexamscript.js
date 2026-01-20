// SYST24444 Mid-Term Exam Script

var data;

function startup() {
	fetch("./mtdata/mtexam.json")
	.then(res => res.json())
	.then(dataReceived => {
		console.log(dataReceived);
		data = dataReceived;		/* so data is available for a later function */
		personal(data);
	})
}

function personal(data) {
/* READ ALL QUESTION DATA CAREFULLY AND YOU MUST INCLUDE YOUR CODING WHERE INDICATED */

/* Part #01 - This question contains 2 instructions:
	 Data: 
			Using the personal data from the JSON file, create the following output
			in two(2) h3 tags in the Part #01 output area in the index.html file;
		
			Template literals MUST be used to create output

			Line 1 output:		President: <first name> <last name>
			Line 2 output:	  Contact me at: <email address>

			<>s denote data that must come from the JSON file. 
			You will have to look in JSON file to determine the data to pull
	 
	 CSS: 
			Create a CSS class (YOUR USER NAME as the name of the CSS class) in the mtexam.css file that 
			includes the following formatting:
			- teal text colour
			- bisque background colour
			- align text to the center
			- bold text

			- Add the class formatting to the Part #01 output area so both lines show the CSS using JavaScript
*/

/* ------------------ Include Part #01 code here ----------------------*/

	document.getElementById("presidentInfo").innerHTML = 
	`
	 <h3>President: ${data.museumPresident.firstData} ${data.museumPresident.lastData} </h3>
	 <br>
	 <h3>Contact me at: ${data.museumPresident.emailData}</h3>
	`;

	document.getElementById("presidentInfo").classList.add("misbahsh");


/* ------------------    end of Part #01 code     --------------------*/
} /* end of personal function */

/*--------------------------------------------------------------------*/


/* Part #02 - This question contains 2 parts:

		Code the functions for both buttons in Part02 button area that updates the list area based
		on the criteria listed in the button text (see index.html); buttons do not have to toggle

*/

/* ------------------ Include Part #02 code here ----------------------*/

/* Button 1 */
	function search01() {

	/**
	 * Click to add a thick crimson border around any list item 
	 * that has a <em>title</em> attribute of "Japanese" */	

	 document.querySelectorAll("li").forEach(x => {
		if (x.title.toLowerCase().includes('japanese')) { 
		    x.style.border = '5px solid crimson';
		} });


	}



/* Button 2 */
	function search02() {

	/**
	 * Click to change the background colour to cyan for any list item that includes an anchor tag
	 */

	 document.querySelectorAll("li").forEach(x => {
		if (x.querySelector("a")) { 
		    x.style.backgroundColor = 'cyan';
		} });


}

/* -------------------- end of Part #2 code ------------------------*/


/* Part #3:
	Once the Part #3 button is clicked, display all data that matches the criteria stated in the button text 
	(see index.html) in the output area specified in index.html. 
	
	Be sure to clear the output area before starting the output loop. 

	Include data that meets the criteria in 3 separate <section> tags followed by 
	a horizontal line separating each match 
	MUST use Template Literals to build output and a For/Of loop to traverse the list

	Include output per item:
	- Object Name / Material Type (bold this line using <strong> tags)
	- Description
	- Image (width of 30px)

	You will need to look in the JSON file to find the corresponding data identifier 
	(data shown in line above is not the exact data identifier from the JSON file but 
	 you should be able to determine which is the correct match. )

	NOTE: The JSON file has alreay been loaded and is included in a variable called data
*/

/* ------------------ Include Part #3 code here ----------------------*/

function listMuseumData() {

	//Click to display museum items whose cultural description is <em>French</em>


	document.getElementById("cultureOutput").innerHTML = "";

	
	for (let m of data.MuseumItems){

		if(m.cultureDesc === 'French'){

			document.getElementById("cultureOutput").innerHTML +=
			`
			<section><strong>${m.objectName} / ${m.materialType} </strong></section>
			<section>${m.description}</section>
			<section><img src="images/${m.image}" width="30"></img></section>
			<hr>
			`;
			
		}
	}
}


/* -------------------- end of Part #03 code ------------------------*/

