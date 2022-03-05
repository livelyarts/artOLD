function hoverInsta(element) {
  element.setAttribute('src', 'instaIndigo.svg');
}

function unhoverInsta(element) {
  element.setAttribute('src', 'instaWhite.svg');
}

function hoverShop(element) {
  element.setAttribute('src', 'cartIndigo.svg');
}

function unhoverShop(element) {
  element.setAttribute('src', 'cartWhite.svg');
}

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".paintings img");
const full = document.querySelector(".full-img");
const caption = document.querySelector(".caption");



previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    full.classList.add("open");
    full.src = preview.src;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
  }
});

full.addEventListener("contextmenu", e => e.preventDefault());

// previews.forEach(preview => {
//   preview.addEventListener("contextmenu", e => e.preventDefault());
// }
