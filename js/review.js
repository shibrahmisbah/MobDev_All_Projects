// review.js


// Get all that use CSS Class name
function classChange() {

	//query selector gives nodelist
	var nodelist;

	//getElementsByClass and getElementsByTag gives a collection
	var collection;

	nodelist = document.querySelectorAll('.inputs');

	//traditional for loop

	/** 
	for(let x = 0; x < nodelist.length; x++){
		nodelist[x].style.backgroundColor = 'lightblue';
	}

	//for/of loop
	for(let x of nodelist){
		x.style.backgroundColor = 'lightblue';
	}

	*/

	document.querySelectorAll('.inputs').forEach(x =>{
		x.style.backgroundColor = 'lightblue';
	});

	//-------------------------------------------------

	collection = getElementsByClassName("instructions");

	for(x of collection){
		x.style.backgroundColor = 'bisque';
	}

	//using arrow function - does NOT work for collections; only works for nodelist

}

// FOR...OF / Template Literal / .getElementById
function forOf() {
	let courses = ["SYST24444-Mobile Web", "INFO20172-Project Mgt", "PROG20799-Data Structures/C", "PROG32356-.Net/C#", "DBAS32100-Database Mgt"];
	let myname;
	let myid;

	out = document.getElementById("output2");
	myname = document.getElementById("sname").value;
	myid = document.getElementById("sid").value;

	out.innerHTML =
	`
		${myname} / ${myid} - 4th Term Courses
		<hr>
		;
	`

	for(let x of courses){
		out.innerHTML += 
		`
		<p>
			<strong>${x}</strong>
		</p>
		`	
		}

} // end of FOR/OF


// Arrow Functions
function arrow() {
	let term;
	let credits = [22, 21, 22, 24];
}


// Classes
function classUsed() {

	
}
