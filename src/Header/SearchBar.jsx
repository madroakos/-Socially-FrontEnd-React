import React from "react";

function SearchBar() {
    return (
        <div className="searchBarLabel" id="searchBarLabel">
            <label>
                <input type="text" placeholder="Search" id="searchBar" autoComplete="off"/>
            </label>
            <div id="dropDown" className="dropdown-content"></div>
        </div>
    )
}

export default SearchBar;