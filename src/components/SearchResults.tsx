import React, { useState } from "react";
import axios from "axios";
import { SearchUserCard } from "./SearchUserCard";
import { Link } from "react-router-dom";
export const SearchResults: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchState, setSearchState] = useState([]);
  const URL = "https://json-server-dep.herokuapp.com/users";

  const handleSearchInput = async (e: any) => {
    const inputValue = e.target.value;
    if (inputValue) {
      setSearchState([]);
      setLoading(true);
      const res = await axios.get(URL);
      const fetchedUsers = await res.data;
      setLoading(false);
      const searchRes = fetchedUsers.filter((x: any) =>
        x.email.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchState(searchRes);
    } else {
      setSearchState([]);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="search-field">
        <input
          type="search"
          placeholder="Search Profiles ..."
          onChange={(e) => handleSearchInput(e)}
        />
      </div>
      <div className="search-results">
        {loading ? (
          <h3>Loadin...</h3>
        ) : (
          <div>
            {searchState &&
              searchState.map((user: any, ix: number) => (
                <Link key={ix} to={`/search/${user.id}`}>
                  <SearchUserCard user={user} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
