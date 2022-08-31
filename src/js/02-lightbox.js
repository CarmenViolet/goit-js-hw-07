import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMain = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
   return galleryItems.map(({preview, original, description}) => {
        return  ` <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join(' ');
}

galleryMain.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captions: true});