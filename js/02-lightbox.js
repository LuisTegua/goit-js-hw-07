import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
addImg(galleryItems);
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function addImg(galleryItems) {
  let imgs = "";
  galleryItems.forEach((img) => {
    imgs += `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>
    </li>`;
  });
  gallery.innerHTML = imgs;
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});
