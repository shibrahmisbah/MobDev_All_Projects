// M05 MOCK

function loadPage() {
  //make sure its ./dataFiles and not ../dataFiles (same with images) and you can manually edit in cpanel as well
  fetch('./dataFiles/mock.json')
  .then (res => res.json())
  .then (data => {
    console.log(data);

    saveToLS(data);

    document.getElementById("output").innerHTML = 
      //"<p>My name is" + data.helpData.helpName + "and I make" + data.helpData.helpAmount + "</p>";
      `
      <p>
        My name is ${data.helpData.helpName} and I make ${data.helpData.helpAmount}
      </p>
      `;
      // NOT using template literal...points off if used

    document.getElementById("output").style.color = "royalblue";

    for (let x of data.helpShops) {
      console.log(x);
      document.getElementById("output").innerHTML += 
      `
        <ul>
          <li>
            City: ${x.city} / Email: ${x.email}<br>
            <img src='../images/${x.logo}' width='50'>
          </li>
        </ul>     
      `;
    }

    document.getElementById("output").innerHTML += `<a href='./other/second.html'>Next Page</a>`;

  })
}

function saveToLS(data) {
  console.log(data);
  localStorage.setItem("sname", data.helpData.helpName);

  //MUST USE JSON.stringify for an array
  localStorage.setItem("shops", JSON.stringify(data.helpShops)); // an array
}



