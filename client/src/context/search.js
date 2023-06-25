import { useState, useContext, createContext } from 'react';

const SearchContext = createContext();

const SearchProvider = (props) => {
    const [auth, setAuth] = useState({
        keyword: "",
        results: []
    });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
        {props.children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export {useSearch, SearchProvider};