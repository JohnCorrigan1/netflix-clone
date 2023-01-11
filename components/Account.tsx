import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { UserContext } from "../lib/AuthContext";
import { AccountContext } from "../lib/AccountsContext";
import Accounts from "../pages/accounts";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

const Account: React.FC<{ name: string }> = (props) => {
  const accountContext = useContext(AccountContext);
  const { user } = useContext(UserContext)

  const accountHandler = () => {
    accountContext.accounts.forEach((account) => {
      if (account.username === props.name) {
        accountContext.setCurrentAccount(account);
    }
    });
  };

  useEffect(() => {
    getAccounts()
  }, [])

  // get accounts for current user from firestore
  const getAccounts = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      const item = document.data();
      if (item.uid === user?.uid) {
        console.log("accounts ", item)
      }
    });
  };
  


  return (
    <Link href="/">
      <div
        className="bg-zinc-500 flex flex-col w-32 h-32 justify-center items-center hover:bg-zinc-400 hover:scale-105 active:scale-95 cursor-pointer rounded-lg"
        onClick={accountHandler}
      >
        <Image src="/anon.svg" height={75} width={75} alt={props.name} />
        <p className="text-zinc-900 font-bold text-2xl">{props.name}</p>
      </div>
    </Link>
  );
};

export default Account;
