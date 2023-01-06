import React from 'react';
import {SearchIcon} from "@heroicons/react/solid";

const SearchButton = () => {
    return (
        <div>
            <input type="search" placeholder="Search for products"
                   className="static pl-4 pr-32 py-2 bg-background text-secondary text-sm font-semibold rounded-2xl"
                   aria-label="Search"/>
            <button type="submit"
                    className="relative right-32 top-1 bottom-1 inline-flex gap-2 px-6 py-1 text-sm text-white font-semibold bg-primary rounded-2xl">
                <SearchIcon className="h-5 w-5"/>
                Search
            </button>
        </div>
    );
};

export default SearchButton;