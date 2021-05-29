const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

// Fetches info from api async and passes data in function

fetch('https://randomuser.me/api/?results=12')
  .then((response) => response.json())
  .then((data) => {
    generateProfile(data.results);
    modalTemplate();
    PopUp(data.results);
    closeModal();
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
    <h3 id="name" class="card-name cap">${info[i].name.first} ${info[i].name.last}</h3>
    <p class="card-text">${info[i].email}</p>
    <p class="card-text cap">${info[i].location.city}, ${info[i].location.state}</p>
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

  gallery.insertAdjacentHTML('afterend', modal);
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.style.display = 'none';
}

// Creates modal info based on employee

function employeeModal(data) {
  let picture = data.picture.large;
  let location = data.location.city;
  let street = data.location.street.name;
  let streetNo = data.location.street.number;
  let streetCountry = data.location.country;
  let streetCode = data.location.postcode;
  let cell = data.cell;
  let birthday = data.dob.date;
  let name = data.name.first;
  let email = data.email;

  let year = new Date(data.dob.date).getFullYear();
  let month = new Date(birthday).getMonth();
  let day = new Date(birthday).getDay();
  console.log(year);

  const modalInfo = `<div class="modal-info-container">
      <img class="modal-img" src="${picture}" alt="profile picture">
      <h3 id="name" class="modal-name cap">${name}</h3>
      <p class="modal-text">${email}</p>
      <p class="modal-text">${location}</p>
      <hr>
      <p class="modal-text">(${cell.slice(0, 4)}) ${cell.slice(
    5,
    9
  )} ${cell.slice(9, 12)}</p>
      <p class="modal-text">${streetNo} ${street} ,${streetCountry} ,${streetCode}</p>
      <p class="modal-text">Birthday: ${month} / ${day} / ${year}</p>
    </div>
    `;

  console.log(modalInfo);
  const modalDiv = document.querySelector('.modal');

  modalDiv.insertAdjacentHTML('beforeend', modalInfo);
}

// Adds event listeners to cards to display modal

function PopUp(data) {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', (e) => {
      const modalContainer = document.querySelector('.modal-container');
      employeeModal(data[i]);
      modalContainer.style.display = 'block';
    });
  }
}

// Closes modal when x button is clicked and clears info container
function closeModal() {
  const modalClose = document.querySelector('#modal-close-btn');
  modalClose.addEventListener('click', (e) => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
    const modalInfoContainer = document.querySelector('.modal-info-container');
    modalInfoContainer.remove();
    console.log(modalInfoContainer);
  });
}

// function closeModal() {
//   const modalContainer = document.querySelector('.modal-container');
//   modalContainer.addEventListener('click', (e) => {
//     const modalClose = document.querySelector('#modal-close-btn');
//     if(e.target === modalClose){
//     modalContainer.style.display = 'none';
//     }
//   });
// }
