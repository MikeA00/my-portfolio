let images = ["./Assets/Michael's Deals.png", "./Assets/2.png", "./Assets/3.png", "./Assets/4.png", "./Assets/5.png",
  "./Assets/6.png","./Assets/7.png","./Assets/8.png","./Assets/9.png","./Assets/10.png","./Assets/11.png","./Assets/12.png",
  "./Assets/13.png","./Assets/14.png","./Assets/15.png","./Assets/16.png","./Assets/17.png","./Assets/18.png","./Assets/19.png",
  "./Assets/20.png","./Assets/21.png","./Assets/22.png","./Assets/23.png","./Assets/24.png","./Assets/25.png"
];
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


