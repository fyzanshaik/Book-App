import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import BookList from './components/BookList';
import AddBookPage from './components/AddBookPage';
import { fetchBooks, addBook } from './api/bookAPI';
import { Book } from './types';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };
    loadBooks();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddBook = async (newBook: Omit<Book, 'serialNumber' | 'ownerImage'>) => {
    const addedBook = await addBook(newBook);
    setBooks([...books, addedBook]);
  };

  const filteredBooks = books.filter((book) =>
    [book.name, book.author, book.genre, book.owner].some((field) =>
      field?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/add-book" element={<AddBookPage onAddBook={handleAddBook} />} />
          <Route
            path="/"
            element={
              <>
                <div className="mb-4">
                  <Link to="/add-book" className="bg-blue-600 text-white p-2 rounded">Add Book</Link>
                </div>
                <SearchFilter onSearch={handleSearch} />
                <BookList books={filteredBooks} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
