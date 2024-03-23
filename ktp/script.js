const books = [
    { title: "Küçük Prens", author: "Antoine de Saint-Exupéry" },
    { title: "Yabancı", author: "Albert Camus" },
    { title: "Boğulmamak İçin", author: "George Orwell" },
    { title: "Günaydın Geceyarısı", author: "Jean Rhys" }
  ];
  
  const bookInfo = document.getElementById("book-info");
  const recommendButton = document.getElementById("recommend-button");
  const booksList = document.getElementById("books");
  
  function showBookRecommendation() {
    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];
    bookInfo.textContent = `${randomBook.title} - ${randomBook.author}`;
  }
  
  recommendButton.addEventListener("click", showBookRecommendation);
  
  window.onload = function() {
    showBookRecommendation();
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} - ${book.author}`;
      booksList.appendChild(li);
    });
  };
  