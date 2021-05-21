const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

// Fetches info from api async and passes data in function

fetch('https://randomuser.me/api/?results=12')
  .then((response) => response.json())
  .then((data) => {
    generateProfile(data.results);
    modalTemplate();
    employeeModal(data.results);
    PopUp();
    console.log(data.results);
  });

// Generates the profile with template literal using data from api

function generateProfile(info) {
  for (let i = 0; i < info.length; i++) {
    const galleryContent = `  <div class="card" >
<div class="card-img-container">
    <img class="card-img" src=${info[i].picture.large} alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${info[i].name.first}${info[i].name.last}</h3>
    <p class="card-text">${info[i].email}</p>
    <p class="card-text cap">${info[i].location.city}${info[i].location.state}</p>
</div>
</div>`;

    gallery.insertAdjacentHTML('beforeend', galleryContent);
  }
}
// Creates a modal template
function modalTemplate() {
  const modal = `<div class="modal-container">
  <div class="modal">
  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
  </div>
  </div>`;
  // const modalInfoContainer = (document.querySelectorAll(
  //   '#modal-info-container'
  // ).innerHTML = ' ');
  gallery.insertAdjacentHTML('afterend', modal);
}
// Creates modal info based on employee
function employeeModal(data) {
  for (let i = 0; i < data.length; i++) {
    const modalInfo = `<div class="modal-info-container">
    <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
    <h3 id="name" class="modal-name cap">${data[i].name.first}</h3>
    <p class="modal-text">${data[i].location.city}</p>
    <hr>
    <p class="modal-text">${data[i].cell}</p>
    <p class="modal-text">${data[i].location.street}</p>
    <p class="modal-text">${data[i].dob.date}</p>
  </div>
  `;

    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
    modalContainer.insertAdjacentHTML('beforeend', modalInfo);
  }
}

function PopUp() {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', (e) => {
      const modalContainer = document.querySelector('.modal-container');
      modalContainer.style.display = 'block';
    });
  }
}
