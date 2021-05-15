const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");
const body = document.querySelector("body");

fetch("https://randomuser.me/api/?results=12").then((response) =>
  response.json().then((data) => {
    generateProfile(data.results);
    modalProfile(data.results);
    PopUp(data.results);
    employeeModal(data.results);
    console.log(data.results);
  })
);

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

function modalProfile(data) {
  modal = `<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    </div> `;
  gallery.insertAdjacentHTML("afterend", modal);
  const modalContainer = document.querySelector(".modal-container");
  const modalClose = document.querySelector("#modal-close-btn");
  modalContainer.style.display = "none";
  modalClose.addEventListener("click", (e) => {
    modalContainer.style.display = "none";
  });
}

function employeeModal(info) {
  for (let i = 0; i < info.length; i++) {
    `<div class="modal-info-container">
  <img class="modal-img" src="${info[i].large}" alt="profile picture">
  <h3 id="name" class="modal-name cap">${info[i].name.first}</h3>
  <p class="modal-text">${info[i].location.city}</p>
  <hr>
  <p class="modal-text">${info[i].cell}</p>
  <p class="modal-text">${info[i].location.street}</p>
  <p class="modal-text">${info[i].dob.date}</p>
</div>
`;
  }
  const infoContainer = (document.querySelectorAll(
    "#modal-info-container"
  ).innerHTML = " ");
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.insertAdjacentHTML("afterbegin", infoContainer);
}

function PopUp(info) {
  const cards1 = document.querySelectorAll(".card");
  console.log(cards1);
  for (let i = 0; i < cards1.length; i++) {
    cards1[i].addEventListener("click", (e) => {
      const modalContainer = document.querySelector(".modal-container");
      modalContainer.style.display = "block";
      employeeModal();
    });
  }
}

const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML("afterEnd", searchContent);
