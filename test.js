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
