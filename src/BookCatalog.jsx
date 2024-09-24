import React, { useState, useEffect } from 'react';

const initialBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  ];

const BookCatalog = ({bookTitle }) => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });


  // Simulate fetching books from an API
  useEffect(() => {
    setBooks(initialBooks)
  }, []);

 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewBook(prevBook => ({ ...prevBook, [id]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.year) {
      setBooks(prevBooks => [...prevBooks, { ...newBook, id: prevBooks.length + 1 }]);
      setNewBook({ title: '', author: '', year: '' });
    }
  };

  return (
    <div>
      <h1>{bookTitle}</h1>
      <p>Number of books: {books.length}</p>
      
   
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="year"
          placeholder="Year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCatalog;