fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
  })
  .then(function (data) {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(data[i]);
      //   console.log(data[i].id);
    }

    // call function here
    renderItem(newArray);
  })
  .catch(function (err) {
    console.log(err);
  });

// function render item
function renderItem(arrayPost) {
  let container = document.querySelector(".container");

  for (let i = 0; i < arrayPost.length; i++) {
    let createNewDiv = document.createElement("div");
    createNewDiv.className = "item";
    createNewDiv.setAttribute("id_Attribute", i + 1);
    createNewDiv.innerHTML = `

    <p id="idItem">${arrayPost[i].id}</p>
    <h1 class="title">
        ${arrayPost[i].title}
    </h1>

    <img src="${arrayPost[i].url}" alt="" />

`;
    container.appendChild(createNewDiv);
  }
}

// xử lý choose item
let select = document.querySelector("select");
let chooseItem = document.getElementById("chooseItem");
let getFullItemElement = document.getElementsByClassName("item");
let tempChooseElement = "";
chooseItem.addEventListener("click", function () {
  for (let i = 0; i < getFullItemElement.length; i++) {
    if (select.value == getFullItemElement[i].getAttribute("id_Attribute")) {
      tempChooseElement = i;
      if (select.value != tempChooseElement) {
        getFullItemElement[tempChooseElement].style.backgroundColor = "white";
      }
      getFullItemElement[i].style.backgroundColor = "red";
    }
  }
});
