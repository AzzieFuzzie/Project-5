const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");
const body = document.querySelector("body");

// Fetches info from api async and passes data in function

fetch("https://randomuser.me/api/?results=12").then((response) =>
  response.json().then((data) => {
    generateProfile(data.results);

    console.log(data.results);
  })
);

// Generates the profile with template literal using data from api

function generateProfile(data) {
  for (let i = 0; i < data.length; i++) {
    const galleryContent = `  <div class="card">
<div class="card-img-container">
    <img class="card-img" src=${data[i].picture.large} alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${data[i].name.first}${data[i].name.last}</h3>
    <p class="card-text">${data[i].email}</p>
    <p class="card-text cap">${data[i].location.city}${data[i].location.state}</p>
</div>
</div>`;
    gallery.insertAdjacentHTML("beforeend", galleryContent);
  }
}

const cards = document.querySelectorAll(".card");
console.log(cards);

// Template literal for search bar
const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML("afterEnd", searchContent);
