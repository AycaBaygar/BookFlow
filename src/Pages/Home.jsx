import { useState } from "react";
import BookItem from "../Components/BookItem";
import { TodoModel } from "../Interfaces/TodoModel";
import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newBook = {
      ...TodoModel,
      id: Date.now(),
      title: inputValue.trim(),
    };
    setBooks([...books, newBook]);
    setInputValue("");
  };

  const handleUpdateBook = (id, newTitle) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, title: newTitle } : b)));
  };

  const handleToggle = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, isCompleted: !b.isCompleted } : b,
      ),
    );
  };

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="page-shell">
      <div className="tracker-card container-fluid">
        <header className="tracker-header">
          <h1 className="tracker-title">
            BOOK <span>FLOW</span>
          </h1>
          <div className="tracker-title-line" />
          <p className="tracker-subtitle">Mükemmel Okuma Deneyimi</p>
        </header>

        <form onSubmit={handleAddBook} className="add-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Okuma hedefinizi yazın..."
            className="book-input"
          />
          <button type="submit" className="add-button text-uppercase">
            EKLE
          </button>
        </form>

        <div className="books-list">
          {books.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">○</div>
              <p className="empty-state-text">Liste Boş Görünüyor</p>
            </div>
          ) : (
            books.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                onUpdate={handleUpdateBook}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {books.length > 0 && (
          <footer className="stats-footer">
            <p className="stats-text">
              {books.length} Toplam •{" "}
              {books.filter((b) => b.isCompleted).length} Bitti
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}
