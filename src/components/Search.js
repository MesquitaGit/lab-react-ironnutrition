import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [keyword, setKeyword] = useState('');

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    props.handleSearch(event.target.value);
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={keyword} type="text" onChange={handleKeywordInput} />
    </>
  );
}

export default Search;
