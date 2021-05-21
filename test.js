// function modalProfile(data) {
//   modal = `<div class="modal-container">
// <div class="modal">
//     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//     </div> `;
//   gallery.insertAdjacentHTML("afterend", modal);
//   const modalContainer = document.querySelector(".modal-container");
//   const modalClose = document.querySelector("#modal-close-btn");
//   modalContainer.style.display = "none";
//   modalClose.addEventListener("click", (e) => {
//     modalContainer.style.display = "none";
//   });
// }
// function employeeModal() {
//   `<div class="modal-info-container">
//     <img class="modal-img" src="${picture.large}" alt="profile picture">
//     <h3 id="name" class="modal-name cap">${name.first}</h3>
//     <p class="modal-text">${location.city}</p>
//     <hr>
//     <p class="modal-text">${cell}</p>
//     <p class="modal-text">${location.street}</p>
//     <p class="modal-text">${dob.date}</p>
//   </div>
//   `;
// }
// const infoContainer = (document.querySelectorAll(
//   "#modal-info-container"
// ).innerHTML = " ");
// const modalContainer = document.querySelector(".modal-container");
// modalContainer.insertAdjacentHTML("afterbegin", infoContainer);

// function PopUp() {
//   const cards1 = document.querySelectorAll(".card");
//   console.log(cards1);
//   for (let i = 0; i < cards1.length; i++) {
//     cards1[i].addEventListener("click", (e) => {
//       const modalContainer = document.querySelector(".modal-container");

//       modalContainer.style.display = "block";
//     });
//   }
// }

// employeeModal();

// Event listener for modal and then generates the modal

// function modal(data) {
//   for (let i = 0; i < data.length; i++) {
//     const cards = document.querySelectorAll('.card');
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].addEventListener('click', (e) => {
//         const modal = `<div class="modal-container">
//         <div class="modal">
//             <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//             <div class="modal-info-container">
//                 <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
//                 <h3 id="name" class="modal-name cap"></h3>
//                 <p class="modal-text">${data[i].email}</p>
//                 <p class="modal-text cap">${data[i].location.city}</p>
//                 <hr>
//                 <p class="modal-text">${data[i].cell}</p>
//                 <p class="modal-text">${data[i].location.city}${data[i].location.state}</p>
//                 <p class="modal-text">${data[i].registered.date}</p>
//             </div>
//             </div>
//         </div>`;
//         gallery.insertAdjacentHTML('afterbegin', modal);
//       });
//     }
//   }
// }

// Template literal for search bar
const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML('afterEnd', searchContent);

// Closes modal when x is clicked

// function closeModal() {
//   const modalClose = document.querySelectorAll('#modal-close-btn');
//   for (let i = 0; i < modalClose.length; i++) {
//     modalClose[i].addEventListener('click', (e) => {
//       const modalContainer = document.querySelectorAll('.modal-container');
//       console.log(modalContainer);
//       modalContainer.style.display = 'none';
//     });
//   }
// }

// Close modal test

// gallery.addEventListener('click', (e) => {
//   const modalContainer = document.querySelector('.modal-container');
//   const modalClose = document.querySelector('#modal-close-btn');
//   console.log(modalContainer);
//   if (e.target === modalClose) {
//     console.log(e.target);
//     console.log('succes');
//     modalContainer.style.display = 'none';
//   }
// });
