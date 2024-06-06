import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update this to your backend URL

export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

export const addBook = async (book: unknown) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book);
  return response.data;
};
