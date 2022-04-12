import React from "react";
import "../components/search.scss";
import { SearchResults } from "../components/SearchResults";
//import { Outlet } from "react-router-dom";
export const Search: React.FC<any> = () => {
  return (
    <div className="search-profiles">
      <h1>Search Profiles</h1>
      <SearchResults />
    </div>
  );
};
