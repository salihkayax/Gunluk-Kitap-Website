import React, { useState } from 'react';
import './App.css';

const books = [
  { title: "Küçük Prens", author: "Antoine de Saint-Exupéry" },
  { title: "Yabancı", author: "Albert Camus" },
  { title: "Boğulmamak İçin", author: "George Orwell" },
  { title: "Günaydın Geceyarısı", author: "Jean Rhys" }
];

function App() {
  const [recommendation, setRecommendation] = useState('');

  const showBookRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];
    setRecommendation(`${randomBook.title} - ${randomBook.author}`);
  };

  return (
    <div className="App">
      <header>
        <h1>Günlük Kitap</h1>
      </header>
      <main>
        <section id="book-recommendation">
          <div id="recommendation-box">
            <p id="book-info">{recommendation}</p>
            <button id="recommend-button" onClick={showBookRecommendation}>Bir kitap öner</button>
          </div>
        </section>
        <section id="book-list">
          <ul id="books">
            {books.map((book, index) => (
              <li key={index}>{book.title} - {book.author}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Günlük Kitap</p>
      </footer>
    </div>
  );
}

export default App;
