import React, { useState } from 'react';
import style2 from './SearchBox.module.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.location.href = searchURL;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style2.searchbox}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search on Google"
        className={style2.searchinput}
      />
      <button type="submit" className={style2.searchbutton}>Click</button>
    </form>
  );
};

export default SearchBox;
