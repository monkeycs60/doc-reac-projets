import React, { useState, useEffect } from "react";
import books from "../../data/literature.json";

// Create a component for displaying a single book
function Book({ title, author, date }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
}

// Create a parent component for the book and navigation buttons
function BookGallery() {
  const [bookData, setBookData] = useState([]); // Initialize state with an empty array of book objects
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state with the current book index

  useEffect(() => {
    setBookData(books);
    setCurrentIndex(0);
  }, []);

  // Navigate to the next book
  function handleNextClick() {
    if (currentIndex === bookData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // Navigate to the previous book
  function handlePrevClick() {
    if (currentIndex === 0) {
      setCurrentIndex(bookData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  if (!bookData?.[currentIndex]) {
    return null;
  }
  const book = bookData[currentIndex];

  return (
    <div>
      <Book title={book.title} author={book.author} date={book.date} />
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default BookGallery;
