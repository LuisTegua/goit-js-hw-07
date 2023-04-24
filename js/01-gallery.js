import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let imgs = "";
let modal;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});

gallery.addEventListener("click", showImg);

function showImg(event) {
  let selectImg = event.target.dataset.source;
  let content = `<img width="1280" height="853" src = ${selectImg}>`;
  modal = basicLightbox.create(content);
  modal.show();
}

document.addEventListener("keyup", (event) => {
  if (document.querySelector('.basicLightbox--visible')) {
    if (event.key === 'Escape') {
      modal.close();
    }
  }
});

addImg();

function addImg() {
  galleryItems.forEach((img) => {
    imgs += `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`;
  });
  gallery.innerHTML = imgs;
}
