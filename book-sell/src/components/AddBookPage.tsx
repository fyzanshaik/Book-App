import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddBookPageProps } from '../types';

const ownerImages = ['https://via.placeholder.com/40/FF0000/FFFFFF?text=O1', 'https://via.placeholder.com/40/00FF00/FFFFFF?text=O2', 'https://via.placeholder.com/40/0000FF/FFFFFF?text=O3'];

const AddBookPage: React.FC<AddBookPageProps> = ({ onAddBook }) => {
	const [book, setBook] = useState({
		name: '',
		author: '',
		genre: '',
		owner: '',
		available: false,
	});

	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value, type, checked } = event.target as HTMLInputElement;
		setBook((prevBook) => ({
			...prevBook,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const newBook = {
			...book,
			ownerImage: ownerImages[Math.floor(Math.random() * ownerImages.length)],
		};
		await onAddBook(newBook);
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border rounded bg-white shadow-md">
			<h2 className="text-2xl font-bold mb-6">Add a new book</h2>
			<div className="mb-4">
				<label className="block mb-2 text-gray-700">Book Name</label>
				<input type="text" name="name" value={book.name} onChange={handleChange} className="border p-2 w-full rounded" />
			</div>
			<div className="mb-4">
				<label className="block mb-2 text-gray-700">Author</label>
				<input type="text" name="author" value={book.author} onChange={handleChange} className="border p-2 w-full rounded" />
			</div>
			<div className="mb-4">
				<label className="block mb-2 text-gray-700">Genre</label>
				<input type="text" name="genre" value={book.genre} onChange={handleChange} className="border p-2 w-full rounded" />
			</div>
			<div className="mb-4">
				<label className="block mb-2 text-gray-700">Owner</label>
				<input type="text" name="owner" value={book.owner} onChange={handleChange} className="border p-2 w-full rounded" />
			</div>
			<div className="mb-4">
				<label className="block mb-2 text-gray-700">Available</label>
				<input type="checkbox" name="available" checked={book.available} onChange={handleChange} className="mr-2" />
				<span>{book.available ? 'Yes' : 'No'}</span>
			</div>
			<button type="submit" className="bg-blue-600 text-white p-2 rounded">
				Add Book
			</button>
		</form>
	);
};

export default AddBookPage;
