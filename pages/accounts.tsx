import type { NextPage } from 'next'
import Head from 'next/head'
import Account from '../components/Account'
import NewAccount from '../components/NewAccount'
import NavBar from '../components/NavBar'
import { useState, useContext, useEffect } from 'react'
import AccountModal from '../components/AccountModal'
import { AccountContext } from "../lib/AccountsContext"
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import { UserContext } from '../lib/AuthContext'
import { useAuthState } from 'react-firebase-hooks/auth'

const Accounts: NextPage = () => {

    const [isOpen, setIsOpen  ] = useState(false)
    const accountContext = useContext(AccountContext)
    const [user] = useAuthState(auth)
    const [accounts, setAccounts] = useState<string[]>([])

    // type AccountData = {
    //     username: string

    // }
    useEffect(() => {
        if(user)
        getAccounts()
        console.log("user",user)
        console.log(accounts)
      }, [user])
    
    //   get accounts for current user from firestore
      const getAccounts = async () => {
        const querySnapshot = await getDocs(collection(db, "users", user!.uid, "accounts"));
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            console.log("accounts", doc.id, " => ", doc.data());
            setAccounts(accounts => [...accounts, doc.id])
        });
        console.log(accounts)
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
            { accounts.map((account, index) => {
                return <Account key={index} name={account} />
            })
            }
            <NewAccount isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        </>
    )
}

export default Accounts