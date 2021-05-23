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

  gallery.insertAdjacentHTML('afterend', modal);
}

// Creates modal info based on employee
function employeeModal(data, info) {
  for (let i = 0; i < data.length; i++) {
    if (info.email === data[i].email) {
      let picture = data[i].picture.large;
      let location = data[i].location.street.name;
      let cell = data[i].cell;
      let date = data[i].dob.date;
      let name = data[i].name.first;

      function dataInfo() {
        const modalInfo = `<div class="modal-info-container">
      <img class="modal-img" src="${picture}" alt="profile picture">
      <h3 id="name" class="modal-name cap">${name}</h3>
      <p class="modal-text">${location}</p>
      <hr>
      <p class="modal-text">${cell}</p>
      <p class="modal-text">${date}</p>
      <p class="modal-text">${name}</p>
    </div>
    `;
        console.log(modalInfo);
        const modalDiv = document.querySelector('.modal');
        const modalContainer = document.querySelector('.modal-container');
        modalContainer.style.display = 'none';
        modalDiv.insertAdjacentHTML('beforeend', modalInfo);
      }
      dataInfo();
    }
  }
}

// Adds event listeners to cards to display modal
function PopUp() {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', (e) => {
      const modalContainer = document.querySelector('.modal-container');
      console.log(modalContainer);
      modalContainer.style.display = 'block';
    });
  }
}

function closeModal() {
  const modalClose = document.querySelector('#modal-close-btn');
  modalClose.addEventListener('click', (e) => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
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
