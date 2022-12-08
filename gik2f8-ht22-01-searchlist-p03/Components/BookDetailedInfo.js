const BookDetailedInfo = (bookdetails) =>  {
  let html = `<div class="book-list__details absolute border-neutral-900 border-2 bg-gradient-to-tr from-lime-400 to-sky-500 right-20 rounded-[.5rem]" style="position:absolute;width:10vw" id="bookDetails">
              <h4 class="text-black-900 text-xl font-medium mb-2">${bookdetails.title}</h4>
              <img src=${bookdetails.coverImage} alt="No image found" class="inline-block rounded-tl-lg rounded-tr-lg">
              <p class="text-black-700">Författare: ${bookdetails.author}</p>
              <p class="text-black-700">Antal sidor: ${bookdetails.pages}</p>
              <p class="text-black-700">Utgivningsår: ${bookdetails.releaseDate}</p>
            </div>`;

  return html;
};