import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMain = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
   return galleryItems.map(({preview, original, description}) => {
        return  `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join(' ');
}

galleryMain.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryMain.addEventListener('click', pickPictureGalleryItem);


function pickPictureGalleryItem(event) {
    event.preventDefault();

    const galleryLink = event.target.classList.contains('gallery__image');

    if(!galleryLink) {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="1000" height="600">
    `)
    instance.show();
    
    galleryMain.addEventListener('keydown', closeModalPicture);
    function closeModalPicture(event) {
      if(event.code === 'Escape') {
        instance.close()
      };
    };
}
