// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const containet = document.querySelector("ul.gallery");
containet.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
containet.addEventListener("click", handleClick);

containet.style.listStyle = "none";

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
  <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`

  ).join("")
}

function handleClick(event) {
    event.preventDefault();
    
    }

var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        
    })

console.log(galleryItems);
