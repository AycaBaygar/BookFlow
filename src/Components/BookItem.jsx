import { useState } from "react";
import "./BookItem.css";

export default function BookItem({ book, onUpdate, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(book.title);

  const handleSave = () => {
    onUpdate(book.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className="book-item-card">
      <div className="book-item-main">
        <div className="check-wrapper">
          <input
            type="checkbox"
            checked={book.isCompleted}
            onChange={() => onToggle(book.id)}
            className="book-checkbox"
          />
          {book.isCompleted && (
            <span className="check-mark" aria-hidden="true">
              ✓
            </span>
          )}
        </div>

        {isEditing ? (
          <div className="edit-wrap">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <button onClick={handleSave} className="save-button">
              OK
            </button>
          </div>
        ) : (
          <div className="book-meta">
            <span
              className={`book-title ${book.isCompleted ? "is-completed" : ""}`}
            >
              {book.title}
            </span>
            <span className="book-badge">Kitap Hedefi</span>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="item-actions">
          <button
            onClick={() => setIsEditing(true)}
            className="icon-button edit-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="icon-button delete-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
