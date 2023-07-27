import React from "react";
import { useLocation, useParams } from "react-router-dom";

const SearchResults = () => {
  const { location } = useParams(); 
  const query = new URLSearchParams(useLocation().search); 


  return (
    <div>
      <h1>Search Results</h1>
      <p>Location: {decodeURIComponent(location)}</p>
      {/* Display search results based on the location and query parameters */}
    </div>
  );
};

export default SearchResults;