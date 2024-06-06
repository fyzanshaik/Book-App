import React from 'react';
import { BookListProps } from '../types';

const BookList: React.FC<BookListProps> = ({ books }) => {
  // Create a map to store owner images by book name
  const ownerImageMap = books.reduce((map, book) => {
    if (!map.has(book.name)) {
      map.set(book.name, book.ownerImage);
    }
    return map;
  }, new Map<string, string>());

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-600 text-white">Serial Number</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Book Name</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Author</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Genre</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Owner</th>
            <th className="py-2 px-4 bg-blue-600 text-white">Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{book.name}</td>
              <td className="py-2 px-4">{book.author}</td>
              <td className="py-2 px-4">{book.genre}</td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <img src={ownerImageMap.get(book.name)} alt={book.owner} className="w-8 h-8 rounded-full mr-2" />
                  <span>{book.owner}</span>
                </div>
              </td>
              <td className="py-2 px-4">
                <input type="checkbox" checked={book.available} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
