// M05 MOCK-myscript2
function loadPage() {
  document.getElementById("moreoutput").innerHTML = "This is the second page";
  document.getElementById("moreoutput").style.color = "purple";

  document.getElementById("moreoutput").innerHTML += `<br>My name is ${localStorage.getItem("sname")}<hr>`;

  list = JSON.parse(localStorage.getItem("shops"));
  console.log(list);
  for (let x of list) {
    document.getElementById("moreoutput").innerHTML += `<p>${x.city}</p>`;
  }
}

