interface Book {
    serialNumber: number;
    name: string;
    author: string;
    genre: string;
    owner: string;
    ownerImage: string;
    available: boolean;
  }
  
  export const booksData: Book[] = [
    {
      serialNumber: 1,
      name: 'Book One',
      author: 'Author One',
      genre: 'Fiction',
      owner: 'Owner One',
      ownerImage: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=O1',
      available: true,
    },
    // Add more initial books as needed
  ];
  