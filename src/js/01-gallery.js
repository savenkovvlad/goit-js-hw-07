

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createMarcup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image js-gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", createMarcup);


gallery.addEventListener("click", onShowImg);

function onShowImg(event) {
  event.preventDefault(); 
  const { target } = event;
  

  if (!target.classList.contains('js-gallery__image')) return;
   
  const origImg = target.dataset.source;  


const instance = basicLightbox.create(`
    <img src="${origImg}" width="800" height="600">
`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscClosedMainPhoto);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscClosedMainPhoto);
    },
  });
  instance.show();

 function  onEscClosedMainPhoto(event) {
    if (event.code === 'Escape') {
      instance.close();
      
      console.log(event)
    }
    };  
  
  
  
  
}
