import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext, useContext } from "react";
import Account from "../models/Account";


type AccountContextType = {
  account: Account[]
    removeMovie: (movie: FeaturedMovie) => void;
    addMovie: (movie: FeaturedMovie) => void;
    setAccount: (account: Account) => void;
};

export const AccountContext = createContext<AccountContextType>({
    account: [],
    removeMovie: (movie: FeaturedMovie) => {},
    addMovie: (movie: FeaturedMovie) => {},
    setAccount: (account: Account) => {},

    
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const AccountContextProvider: React.FC<Props> = (props) => {
  const [library, setLibrary] = useState<FeaturedMovie[]>([]);
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);
  const contextValue: AccountContextType = {
    account: [],
    removeMovie: (movie: FeaturedMovie) => {
        setLibrary(library.filter((m) => m.id !== movie.id));
    },
    addMovie: (movie: FeaturedMovie) => {
        setLibrary([...library, movie]);
    },
    setAccount: (account: Account) => {
        setCurrentAccount(account)
        setLibrary(account.library);
    },
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
