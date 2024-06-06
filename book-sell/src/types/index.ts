export interface Book {
    serialNumber: number;
    name: string;
    author: string;
    genre: string;
    owner: string;
    ownerImage: string;
    available: boolean;
  }
  
  export interface AddBookPageProps {
    onAddBook: (book: Omit<Book, 'serialNumber' | 'ownerImage'>) => void;
  }
  
  export interface BookListProps {
    books: Book[];
  }
  