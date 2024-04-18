"use client";

import { createContext, useContext, useState } from "react";

type contextType = {
  activeSearch: boolean;
  setActiveSearch: React.Dispatch<boolean>;
};

export const SearchContext = createContext<any>(null);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <SearchContext.Provider value={{ activeSearch, setActiveSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
