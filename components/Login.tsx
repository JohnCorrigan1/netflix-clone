import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { signInWithPopup, signInAnonymously, signInWithEmailAndPassword, getAuth, User } from "firebase/auth";
import { UserContext } from "../lib/AuthContext";
import { auth, db, googleProvider } from "../lib/firebase";
import toast from 'react-hot-toast';
import { addDoc, collection } from "firebase/firestore";


const Login: React.FC = () => {

    const { user } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async () => {
        // e.preventDefault();
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            
            console.log("helllooooo")
            toast.success("Signed in with email and password");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("Error: " + errorMessage, errorCode);
          });
          // if(user)
          // addUser(email, user)
    }

    const addUser = async (email: string, user: User) => {
      // if (!user) {
      //   return;
      // }
  
      //add a collection to collection in firestore
  
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          uid: user?.uid,

        });
        toast.success("Account added");
      } catch (e) {
        toast.error("Error adding document");
        console.log(e)
      }
      // createLibrary(user)
    };

    // const createLibrary = async (user: User) => {
    //   try {
    //     db.collection("users").doc(
    //       "DSd4rzLGTCWv1uGBqBdl").collection("library").doc("library").set({
    //       library: []
    //     })
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google");
      console.log(user)
    };

    const signInAnonymouslyHandler = async () => {
      await signInAnonymously(auth);
      toast.success("Signed in anonymously");
    };

    return (
        <div className="p-10 md:p-16 flex item-center flex-col bg-black  bg-opacity-75 text-zinc-100">
            <div>
                <h1 className="text-3xl font-bold">Sign In</h1>
            </div>
        <form onSubmit={submitHandler} className="border-b border-black pb-5 mt-10">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={emailChangeHandler} className="rounded-md  p-2 bg-zinc-700" />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={passwordChangeHandler} className="rounded-md  p-2 bg-zinc-700" />
            </div>
            <div className=" mt-10">
              <Link href="/accounts"><button  onClick={submitHandler} className="bg-main font-bold active:scale-95 rounded-sm p-3 shadow-md cursor-pointer w-full">Sign in</button></Link>
            </div>
        </form>

      <div className="mt-5">
      <Link href="/accounts"><button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border w-full text-black justify-center active:scale-95"
        onClick={signInWithGoogle}
        
      >
        <Image src="/google.png" alt="Google sign in" width={30} height={30} />{" "}
        Sign in with Google
      </button></Link>
      </div>
      <div className="mt-5 w-full">
      <Link href="/accounts"><button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center justify-center shadow-sm border text-black w-full active:scale-95"
        onClick={signInAnonymouslyHandler}
      >
        <Image src="/anon.svg" alt="anon" width={30} height={30} />{" "}
        Sign in anonymously
      </button></Link>
      </div>
      <div className="flex justify-center mt-5">
        <div className=" text-center flex gap-3">
            New to Notflix?{" "}
            <Link href="/signup">
                <p className="text-main font-semibold hover:underline">Sign up now.</p>
            </Link>
        </div>
      </div>
      </div>
    )
}

export default Login;