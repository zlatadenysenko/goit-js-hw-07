import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
const galerryMarkup = creatGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, galerryMarkup);

galleryContainer.addEventListener(`click`, onGalerryContainerClick);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class= "gallery__item" >
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(``);
}

function onGalerryContainerClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = evt.target.getAttribute("data-source");

  const template = basicLightbox.create(
    `
    <img src="${selectedImg}" width="800" height="600">
`,
    // -------закриття модалки Ескейпом----------
    {
      onShow: () => {
        document.addEventListener(`keydown`, onEscapeKey);
      },
      onClose: () => {
        document.removeEventListener(`keydown`, onEscapeKey);
      },
    }
  );

  function onEscapeKey(evt) {
    if (evt.key === "Escape") {
      template.close();
    }
  }
  // --------------------------------------------
  template.show();
}
