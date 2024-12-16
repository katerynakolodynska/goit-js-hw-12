import {addLoader, clearGallery, hideLoading, showGallery, showButton } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let currentPage = 1;
let currentQuery = '';

const form = document.querySelector('.search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
event.preventDefault();

currentQuery = input.value.trim();
if (!currentQuery) {
    iziToast.error({
        title: `Error`,
        message: `Please enter a search query.`,
        backgroundColor: "red",
        messageColor: "white",
        titleColor: "white",
});
return;
}
    
currentPage = 1;
clearGallery();
addLoader(gallery); 
await fetchAndRenderImages();
}

async function onLoadMore() {
currentPage += 1;
addLoader(gallery);
    await fetchAndRenderImages();
    scrollBar();
}

async function fetchAndRenderImages() {
    try {
        const data = await fetchImages(currentQuery, currentPage);
        showGallery(data.hits);

        if (data.totalHits <= currentPage * 15) {
            showButton(false);
            iziToast.info({
                title: `Info`,
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: "green",
                messageColor: "white",
                titleColor: "white",
            });
        } else {
            showButton(true);
        }
    } catch (error) {
        console.error(`Error fetching images:`, error); 
        iziToast.error({
            title: `Error`,
            message: `Error: ${error.message}`, 
            backgroundColor: "red",
            messageColor: "white",
            titleColor: "white",
        });
    } finally {
        hideLoading(); 
    }
}


function scrollBar() {
  const galleryItem = document.querySelector('.gallery a');
  if (galleryItem) {
    const { height: cardHeight } = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2.6, 
      behavior: 'smooth',
    });
  }
}

