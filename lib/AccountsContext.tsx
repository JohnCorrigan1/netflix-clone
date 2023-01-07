import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext, useContext } from "react";
import Account from "../models/Account";


type AccountContextType = {
  accounts: Account[]
    removeMovie: (movie: FeaturedMovie) => void;
    addMovie: (movie: FeaturedMovie) => void;
    setAccount: (account: Account) => void;
    addAccount: (username: string) => void;
    setAccounts: (accounts: Account[]) => void;
};

export const AccountContext = createContext<AccountContextType>({
    accounts: [],
    removeMovie: (movie: FeaturedMovie) => {},
    addMovie: (movie: FeaturedMovie) => {},
    setAccount: (account: Account) => {},
    addAccount: (username: string) => {},
    setAccounts: (accounts: Account[]) => {}

    
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const AccountContextProvider: React.FC<Props> = (props) => {
  const [library, setLibrary] = useState<FeaturedMovie[]>([]);
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const contextValue: AccountContextType = {
    accounts: accounts,
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
    addAccount: (username: string) => {
        const newAccount: Account = {
            username: username,
            library: []
        }
        setAccounts([...accounts, newAccount])
    },
    setAccounts: (accounts: Account[]) => {
        setAccounts(accounts)
    }
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
