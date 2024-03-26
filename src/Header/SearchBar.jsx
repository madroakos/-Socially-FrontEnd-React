import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './SearchBar.css';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const toggleDropdown = (visible) => {
        setDropdownVisible(visible);
        if (!visible) {
            setSearchValue('');
        }
    };

    useEffect(() => {
        if (searchValue.length === 0) {
            setSearchResults([]);
        } else {
            fetch(`http://localhost:8080/searchForUser?username=${searchValue}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data);
                });
        }
    }, [searchValue]);

    return (
        <div className="searchBarLabel" id="searchBarLabel">
            <label>
                <input
                    type="text"
                    placeholder="Search"
                    id="searchBar"
                    autoComplete="off"
                    value={searchValue}
                    onChange={handleSearch}
                    onFocus={() => toggleDropdown(true)}
                    onBlur={() => setTimeout(() => toggleDropdown(false), 100)}
                />
            </label>
            {dropdownVisible &&
                <div id="dropDown" className="dropdown-content">
                    {searchResults.map(user => (
                        <Link
                            key={user.username}
                            to={`/user/${user.username}`}>
                            {user.username}
                        </Link>
                    ))}
                </div>
            }
        </div>
    );
}

export default SearchBar;