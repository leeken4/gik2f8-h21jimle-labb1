'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  let existingBookInfo = document.getElementById("bookDetails");
  
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingBookInfo && bookList.length == 10 && existingBookInfo.remove(); 
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));

  const books = document.querySelectorAll('.book-list__item');

  books.forEach(book => {
    book.addEventListener('mouseenter', (e) => renderDetails(e));
  })
};

async function getBookDetails(id) {
  const result = await fetch(url + '/' + id)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
};

async function renderDetails(e) {
  const root = document.getElementById('root');

  let bookdetails = await getBookDetails(e.target.id);

  root.insertAdjacentHTML('beforeend', BookDetailedInfo(bookdetails));

  e.target.addEventListener("mouseleave",(e) =>{
    let existingElement = document.getElementById("bookDetails");
    existingElement && existingElement.remove(); 
});  
}