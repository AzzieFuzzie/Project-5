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
    const galleryContent = `  <div class="card" >
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

// Event listener for modal and then generates the modal

gallery.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(".card");
  console.log(cards);
  // for (let i = 0; i < cards.length; i++) {
  const modal = `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="#" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>`;

  gallery.insertAdjacentHTML("afterend", modal);
  // }
});

// close modal

gallery.addEventListener("click", (e) => {
  const modalClose = document.querySelectorAll("#modal-close-btn");
  console.log(modalClose);
  if (e.target === modalClose) {
    const modalContainer = document.querySelectorAll(".modal-container");
    console.log(modalContainer);
    modalContainer.style.display = "none";
  }
});
// Template literal for search bar
const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML("afterEnd", searchContent);
