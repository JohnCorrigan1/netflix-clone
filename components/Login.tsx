import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="p-10 md:p-16 flex item-center flex-col bg-black  bg-opacity-75 text-zinc-100">
            <div>
                <h1 className="text-2xl font-bold">Sign In</h1>
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
              <button type="submit" className="bg-main font-bold active:scale-95 rounded-sm p-3 shadow-md cursor-pointer w-full">Sign in</button>
            </div>
        </form>

      <div className="mt-5">
      <button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border w-full text-black justify-center active:scale-95"
        // onClick={signInWithGoogle}
      >
        <Image src="/google.png" alt="Google sign in" width={30} height={30} />{" "}
        Sign in with Google
      </button>
      </div>
      <div className="mt-5 w-full">
      <button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center justify-center shadow-sm border text-black w-full active:scale-95"
        // onClick={signInAnonymouslyHandler}
      >
        <Image src="/anon.svg" alt="anon" width={30} height={30} />{" "}
        Sign in anonymously
      </button>
      </div>
      </div>
    )
}

export default Login;