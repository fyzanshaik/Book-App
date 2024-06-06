const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;
const dataFilePath = path.join(__dirname, 'books.json');

app.use(cors());
// app.use(cors({
//   origin: 'http://192.168.1.5:5000', // Replace with your frontend's IP and port
//   credentials: true
// }));
app.use(express.json());

// Get books
app.get('/api/books', (req, res) => {
    console.log('get request hit')
  fs.readFile(dataFilePath, 'utf-8', (err, data) => {
    console.log('reading')
    if (err) {
      return res.status(500).send('Error reading data');
    }
    res.json(JSON.parse(data));
  });
});

// Add a new book
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  console.log('post request hit')
  fs.readFile(dataFilePath, 'utf-8', (err, data) => {
    console.log('reading in post')
    if (err) {
      return res.status(500).send('Error reading data');
    }
    const books = JSON.parse(data);
    books.push({ ...newBook, serialNumber: books.length + 1 });
    console.log('pushed data')
    
    // Update available key to true for every index
    // updateAvailableKe  y(books);
    
    fs.writeFile(dataFilePath, JSON.stringify(books, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing data');
      }
      res.status(201).send('Book added');
    });
  });
});

function updateAvailableKey(data) {
  data.forEach(book => {
    book.available = true;
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
