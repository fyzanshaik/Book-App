import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search books..."
      className="border p-2 w-full rounded mb-4"
    />
  );
};

export default SearchFilter;
