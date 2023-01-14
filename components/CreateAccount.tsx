import { getAdditionalUserInfo, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth, db } from "../lib/firebase";

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user] = useAuthState(auth);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // addUser(email)
        toast.success("Signed in with email and password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Error: " + errorMessage, errorCode);
      });
      
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="p-10 md:p-16 flex item-center flex-col bg-black  bg-opacity-75 text-zinc-100">
      <div>
        <h1 className="text-3xl font-bold">Create Account</h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="border-b border-black pb-5 mt-10"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            className="rounded-md  p-2 bg-zinc-700"
          />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            className="rounded-md  p-2 bg-zinc-700"
          />
        </div>
        <div className="flex flex-col w-full mt-5">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={confirmPasswordChangeHandler}
            className="rounded-md  p-2 bg-zinc-700"
          />
        </div>
        <div className=" mt-10">
          <button
            type="submit"
            className="bg-main font-bold active:scale-95 rounded-sm p-3 shadow-md cursor-pointer w-full"
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="mt-5">
        <button
          className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border w-full text-black justify-center active:scale-95"
          // onClick={signInWithGoogle}
        >
          <Image
            src="/google.png"
            alt="Google sign in"
            width={30}
            height={30}
          />{" "}
          Sign in with Google
        </button>
      </div>
      <div className="mt-5 w-full">
        <button
          className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center justify-center shadow-sm border text-black w-full active:scale-95"
          // onClick={signInAnonymouslyHandler}
        >
          <Image src="/anon.svg" alt="anon" width={30} height={30} /> Sign in
          anonymously
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <div className=" text-center flex gap-3">
          Already have an account?{" "}
          <Link href="/signin">
            <p className="text-main font-semibold hover:underline">Log In.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
