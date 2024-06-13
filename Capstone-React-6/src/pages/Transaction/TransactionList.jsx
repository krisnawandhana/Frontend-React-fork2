import React, { useState } from 'react';
import TransactionTable from '../../components/Transaction/TransactionTable';
import SearchBar from '../../components/Transaction/SearchBar';

const TransactionList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <TransactionTable searchTerm={searchTerm} />
    </div>
  );
};

export default TransactionList;
