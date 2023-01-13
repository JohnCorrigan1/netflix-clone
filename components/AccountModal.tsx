import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import { useContext, useState } from "react"
import { UserContext } from "../lib/AuthContext"
import { AccountContext } from "../lib/AccountsContext"
import { addDoc, collection, getDocs, query, setDoc, where, doc } from "firebase/firestore"
import { auth, db } from "../lib/firebase"
import toast from "react-hot-toast"
import { useAuthState } from "react-firebase-hooks/auth"


const AccountModal: React.FC<{ isOpen: boolean, currentUser: string, setIsOpen: Dispatch<SetStateAction<boolean>> }> = (props) => {

  // const { user } = useContext(UserContext)
  const [user] = useAuthState(auth)
  const accountContext = useContext(AccountContext)
  const [username, setUsername] = useState("")

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const closeHandler = () => {
    props.setIsOpen(false)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    accountContext.addAccount(username)
    addAccount()
    props.setIsOpen(false)
    // createLibrary()
  }
  
  //add account collection to user document of the current user in firestore
  const addAccount = async () => {
    // const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((document) => {
    //   const item = document.data();
      // if(item.uid === user?.uid){
        // use setDoc instead
        try {
          const docRef = setDoc(doc(db, "users", user!.uid, "accounts", username), {
            id: username,
            username: username,
            uid: user?.uid,
            // library: []
          });
          toast.success("Account added");
        } catch (e) {
          toast.error("Error adding document");
        }
      }
    // });
  // }


  if (!props.isOpen)
    return null

  return (
    <>
      <div onClick={closeHandler} className='modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]' ></div>
      <div className='bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 justify-center -translate-y-1/2 w-1/2 max-w-xl overflow-y-scroll scrollbar-hide h-2/6 z-[2001]'>
        <div className="hover:bg-zinc-600 hover:scale-105 rounded-full bg-opacity-50 active:scale-95 absolute top-3 right-3"
          onClick={closeHandler}
        >
          <Image src="/close_white.svg" height={40} width={40} alt="X" />
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-5">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="bg-zinc-800 text-zinc-200 rounded-lg p-2" onChange={usernameHandler} />
        </div>
        <button className="bg-main font-bold hover:scale-105 active:scale-95 rounded-lg p-2 mt-5 w-full" type="submit">Create Profile</button>
        </form>
      </div>
    </>)
}

export default AccountModal