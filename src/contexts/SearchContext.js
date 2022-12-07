import React, { createContext, useState } from 'react'
 /* creation de context de recherche  */
 /* on va utiliser ce context dans le SearchBar et FoundedMovie*/

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
    const [searchWord, setSearchWord] = useState("");
    const sharedValues = { searchWord, setSearchWord }
    return (<SearchContext.Provider value={sharedValues}>
               {children}
            </SearchContext.Provider>
    );
}