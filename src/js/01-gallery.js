// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageTemplates = ({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const render = () => {

    const list = galleryItems.map(item => imageTemplates(item)).join('');
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('beforeend', list);
};

render ();

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt"});