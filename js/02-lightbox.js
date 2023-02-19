import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const galerryMarkup = creatGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, galerryMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class= "gallery__item" >
<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(``);
}

new SimpleLightbox(".gallery a", {
  captionType: `attr`,
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: 250,
});
