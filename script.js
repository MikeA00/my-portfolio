// function openLink(url) {
//   window.open(url, "_blank");
// }

// function showImage(imagePath) {
//   const modal = document.getElementById("image-modal");
//   const projectImage = document.getElementById("project-image");
//   projectImage.src = imagePath;
//   modal.style.display = "flex";
// }

// function closeModal() {
//   document.getElementById("image-modal").style.display = "none";
// }

let images = ["./Assets/Michael's Deals.png", "./Assets/2.png", "./Assets/3.png", "./Assets/4.png", "./Assets/5.png"];
let currentImageIndex = 0;

function openModal() {
  document.getElementById("imageModal").style.display = "flex";
  updateModalImage();
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  updateModalImage();
}

function updateModalImage() {
  document.getElementById("modalImage").src = images[currentImageIndex];
}


