import type { NextPage } from 'next'
import Head from 'next/head'
import Account from '../components/Account'
import NewAccount from '../components/NewAccount'
import NavBar from '../components/NavBar'
import { useState, useContext, useEffect } from 'react'
import AccountModal from '../components/AccountModal'
import { AccountContext } from "../lib/AccountsContext"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { UserContext } from '../lib/AuthContext'

const Accounts: NextPage = () => {

    const [isOpen, setIsOpen  ] = useState(false)
    const accountContext = useContext(AccountContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        getAccounts()
      }, [])
    
    //   get accounts for current user from firestore
      const getAccounts = async () => {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
          const item = document.data();
        //   if (item.uid === user?.uid) {
        //     console.log("accounts ", item)
        //   }
        // });
        console.log("item here", item)
        });
    };
      
      
    
    return (
        <>
        <Head>
            <title>Accounts</title>
            <meta name="Accounts" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <AccountModal isOpen={isOpen} currentUser={"hugh"} setIsOpen={setIsOpen} />
        <div className='flex gap-10 w-full justify-center items-center login'>
            <Account name="user" />
            { accountContext.accounts.map((account, index) => {
                return <Account key={index} name={account.username} />
            })
            }
            <NewAccount isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        </>
    )
}

export default Accounts