import FeaturedMovie from "../models/FeaturedMovie";
import React, { useState, createContext } from "react";
import Account from "../models/Account";

type AccountContextType = {
  accounts: Account[];
  setAccount: (account: Account) => void;
  addAccount: (username: string) => void;
  setAccounts: (accounts: Account[]) => void;
  currentAccount: string;
  setCurrentAccount: (username: string) => void;
};

export const AccountContext = createContext<AccountContextType>({
  accounts: [
    {
      username: "user",
      library: [],
      addMovie: (movie: FeaturedMovie) => {},
      removeMovie: (movie: FeaturedMovie) => {},
    },
  ],
  setAccount: (account: Account) => {},
  addAccount: (username: string) => {},
  setAccounts: (accounts: Account[]) => {},
  currentAccount: "",
  setCurrentAccount: (username: string) => {},
});

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const AccountContextProvider: React.FC<Props> = (props) => {
  const [currentAccountState, setCurrentAccountState] = useState<string>("");
  const [accounts, setAccounts] = useState<Account[]>([]);
  const contextValue: AccountContextType = {
    accounts: accounts,
    setAccount: (account: Account) => {
      // setCurrentAccount(account)
      // setLibrary(account.library);
    },
    addAccount: (username: string) => {
      const newAccount: Account = {
        username: username,
        library: [],
        addMovie: (movie: FeaturedMovie) => {
          newAccount.library.push(movie);
        },
        removeMovie: (movie: FeaturedMovie) => {
          newAccount.library = newAccount.library.filter(
            (m) => m.id !== movie.id
          );
        },
      };
      setAccounts([...accounts, newAccount]);
    },
    setAccounts: (accounts: Account[]) => {
      setAccounts(accounts);
    },
    currentAccount: currentAccountState,
    setCurrentAccount: (username: string) => {
      setCurrentAccountState(username);
    },
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
