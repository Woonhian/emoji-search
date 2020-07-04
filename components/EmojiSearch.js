import { useState, useEffect } from "react";

const EmojiSearch = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    props.setSearchTerm(search);
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        value={props.search}
        onChange={handleSearchChange}
        className="form-control form-control-lg"
        type="text"
        placeholder="Search Emoji"
      />
    </div>
  );
};

export default EmojiSearch;
