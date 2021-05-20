const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

// Fetches info from api async and passes data in function

fetch('https://randomuser.me/api/?results=12')
  .then((response) => response.json())
  .then((data) => {
    generateProfile(data.results);
    modal(data.results);
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

// Event listener for modal and then generates the modal

function modal(data) {
  for (let i = 0; i < data.length; i++) {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', (e) => {
        const modal = `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap"></h3>
                <p class="modal-text">${data[i].email}</p>
                <p class="modal-text cap">${data[i].location.city}</p>
                <hr>
                <p class="modal-text">${data[i].cell}</p>
                <p class="modal-text">${data[i].location.city}${data[i].location.state}</p>
                <p class="modal-text">${data[i].registered.date}</p>
            </div>
            </div>
        </div>`;
        gallery.insertAdjacentHTML('afterbegin', modal);
      });
    }
  }
}
// close modal

function closeModal() {
  const modalClose = document.querySelectorAll('#modal-close-btn');
  for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', (e) => {
      const modalContainer = document.querySelectorAll('.modal-container');
      console.log(modalContainer);
      modalContainer.style.display = 'none';
    });
  }
}

// Template literal for search bar
const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML('afterEnd', searchContent);
