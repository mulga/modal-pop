// variables

const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// close modal

function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none";
}
