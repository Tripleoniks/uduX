import React, { useState } from 'react';
import { SearchField } from './style';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <SearchField
      type="text"
      className="form-control"
      value={text}
      onChange={(e) => onChange(e.target.value)}
      autoFocus
    />
  );
};

export default Search;
