import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input
        className="search-bar"
        type="text"
        onChange={handleInputChange}
        value={searchText}
      />
      <button
        className="button-1"
        type="submit"
        onClick={() => {
          console.log(searchText);
          onSubmit();
        }}
      >
        Search
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
