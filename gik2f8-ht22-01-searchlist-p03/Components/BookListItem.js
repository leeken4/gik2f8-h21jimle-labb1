const BookListItem = (book) => {
  let html = `
    <li  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-800 
    last:border-b-0 border-b border-indigo-500 cursor-pointer flex justify-between items-center" id=${book.id}>
    <p>${book.author} - ${book.title}</p>
    </li>
    `;

  return html;
};
