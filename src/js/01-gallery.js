// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';



const galleryRef = document.querySelector(".gallery")
createGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery__link', { captionDelay: 250 });


function createGallery(array) {

    const markup = array.map(el =>
       `
            <a class="gallery__link" href="${el.original}">
                <img
                class="gallery__image"
                src="${el.preview}"
                alt="${el.description}"
                title="${el.description}"
                />
            </a>
       `).join("");

    return galleryRef.innerHTML = markup;
}